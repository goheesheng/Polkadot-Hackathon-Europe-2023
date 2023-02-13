#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

#[openbrush::contract]
pub mod rmrk_example_mintable {
    use ink_lang::codegen::{
        EmitEvent,
        Env,
    };
    use ink_prelude::collections::BTreeMap;
    use ink_storage::traits::SpreadAllocate;
    use ink_prelude::vec;
    use ink_prelude::vec::Vec;
    use ink_prelude::string::ToString;

    use openbrush::{
        contracts::{
            ownable::*,
            psp34::extensions::{
                enumerable::*,
                metadata::*,
            },
            reentrancy_guard::*,
        },
        traits::{
            Storage,
            String,
        },
    };

    use rmrk::{
        storage::*,
        traits::*,
        Config as RmrkConfig,
    };

    /// Event emitted when a token is bought/listed.
    #[ink(event)]
    pub struct SetListed {
        #[ink(topic)]
        token_id: Id,
        #[ink(topic)]
        old_listed: Option<bool>,
        #[ink(topic)]
        new_listed: bool,
    }

    /// Event emitted when a token transfer occurs.
    #[ink(event)]
    pub struct Transfer {
        #[ink(topic)]
        from: Option<AccountId>,
        #[ink(topic)]
        to: Option<AccountId>,
        #[ink(topic)]
        id: Id,
    }

    /// Event emitted when a token approve occurs.
    #[ink(event)]
    pub struct Approval {
        #[ink(topic)]
        from: AccountId,
        #[ink(topic)]
        to: AccountId,
        #[ink(topic)]
        id: Option<Id>,
        approved: bool,
    }

    // Rmrk contract storage
    #[ink(storage)]
    #[derive(Default, SpreadAllocate, Storage)]
    pub struct Rmrk {
        #[storage_field]
        psp34: psp34::Data<enumerable::Balances>,
        #[storage_field]
        guard: reentrancy_guard::Data,
        #[storage_field]
        ownable: ownable::Data,
        #[storage_field]
        metadata: metadata::Data,
        #[storage_field]
        minting: MintingData,
    }

    impl PSP34 for Rmrk {}

    impl Ownable for Rmrk {}

    impl PSP34Metadata for Rmrk {}

    impl PSP34Enumerable for Rmrk {}

    impl Minting for Rmrk {}

    impl Rmrk {
        /// Instantiate new RMRK contract
        #[allow(clippy::too_many_arguments)]
        #[ink(constructor)]
        pub fn new(
            name: String,
            symbol: String,
            base_uri: String,
            price_per_mint: Balance,
            collection_metadata: String,
            _royalty_receiver: AccountId,
            _royalty: u8,
        ) -> Self {
            ink_lang::codegen::initialize_contract(|instance: &mut Rmrk| {
                RmrkConfig::config(
                    instance,
                    name,
                    symbol,
                    base_uri,
                    price_per_mint,
                    collection_metadata,
                )
            })
        }

        #[ink(message)]
        pub fn get_all_listed_nft(&mut self) -> Vec<BTreeMap<String, String>>{
            let mut info = vec![];
            let _total_supply = self.total_supply();
            for n in 1..(_total_supply+1) {
                let id: u64 = n as u64;
                let mut tokenId: BTreeMap<String, String> = BTreeMap::new();
                tokenId.insert("token".as_bytes().to_vec(),id.to_string().as_bytes().to_vec());
                
                let result = self.get_metadata(id);
                match result {
                    Ok(result) => {
                        tokenId.insert("metadata".as_bytes().to_vec(), result.as_bytes().to_vec());
                    },
                    Err(_err) => {
                        tokenId.insert("metadata".as_bytes().to_vec(), "Error".as_bytes().to_vec());
                    }
                }

                let nft_price = self.minting.nft_price.get(Id::U64(id));
                match nft_price {
                    Some(result) => {
                        tokenId.insert("nft_price".as_bytes().to_vec(), result.to_string().as_bytes().to_vec());
                    },
                    None => {
                        tokenId.insert("nft_price".as_bytes().to_vec(), "Error".as_bytes().to_vec());
                    }
                }
                
                info.push(tokenId);
            }
            info
        }

        #[ink(message)]
        pub fn get_nft_by_owner(&mut self, address: AccountId) -> Vec<BTreeMap<String, String>> {
            let mut info = vec![];
            let mut index = 0;
            
            loop {
                let mut dictMap: BTreeMap<String, String> = BTreeMap::new();
                let tokenId = self.owners_token_by_index(address, index);
                index += 1;
                match tokenId {
                    Ok(tokenId) => {
                        let token_id = if let Id::U64(tokenId) = 
                        tokenId {
                            tokenId
                        } else {
                            unreachable!("I am sure it is U64")
                        };
                        dictMap.insert("token".as_bytes().to_vec(), (token_id).to_string().as_bytes().to_vec());
                        match self
                            .minting
                            .listed
                            .get(tokenId)
                        {
                            Some(res) => {
                                dictMap.insert("listed".as_bytes().to_vec(), res.to_string().as_bytes().to_vec());
                                let resultId = self.get_metadata(token_id);
                                match resultId {
                                    Ok(resultId) => {
                                        dictMap.insert("metadata".as_bytes().to_vec(), resultId.as_bytes().to_vec());
                                    },
                                    Err(_err) => {
                                        dictMap.insert("metadata".as_bytes().to_vec(), "Error".as_bytes().to_vec());
                                    }
                                }
                            }
                            None => {
                                dictMap.insert("listed".as_bytes().to_vec(), "Error".as_bytes().to_vec());
                                dictMap.insert("metadata".as_bytes().to_vec(), "Error".as_bytes().to_vec());
                            }
                        }

                        let nft_price = self.minting.nft_price.get(Id::U64(token_id));
                        match nft_price {
                            Some(result) => {
                                dictMap.insert("nft_price".as_bytes().to_vec(), result.to_string().as_bytes().to_vec());
                            },
                            None => {
                                dictMap.insert("nft_price".as_bytes().to_vec(), "Error".as_bytes().to_vec());
                            }
                        }

                        info.push(dictMap);
                    },
                    Err(_err) => {
                        break;
                    }
                }
            }

            info
        }

        #[ink(message)]
        pub fn buy_nft(&mut self, token_id_u64: u64) -> Result<(),PSP34Error> {
            let token_id = Id::U64(token_id_u64);
            let buyer = self.env().caller();
            assert!(buyer != self.owner_of(token_id.clone()).unwrap(), "AlreadyOwner");

            let from = self.env().account_id();
            self.env().emit_event(Transfer { from: Some(from), to: Some(buyer), id: token_id.clone() });
            
            // use _transfer_token instead of transfer as contract only has allowance, contract isnt owner. Nvm
            // https://github.com/727-Ventures/openbrush-contracts/blob/main/contracts/src/token/psp34/psp34.rs#L134
            // match self.call("transact"(buyer, Some(token_id.clone()), true){
            match self.psp34.transfer(buyer, token_id.clone(), ink_prelude::vec::Vec::new(),){
                Ok(()) => {
                    let old_listed = self.minting.listed.get(token_id.clone());
                    let new_listed: bool = false;
                    self.minting.listed.insert(token_id.clone(), &new_listed);

                    self.env().emit_event(SetListed {token_id, old_listed, new_listed});
                    Ok(())
                }
                Err(err) => Err(err)
            }
        }

        #[ink(message)]
        pub fn test1(&mut self) -> AccountId {
            self.test2()
        }

        #[ink(message)]
        pub fn test2(&mut self) -> AccountId {
            self.env().caller()
        }
    } 

    impl psp34::Internal for Rmrk {
        /// Emit Transfer event
        fn _emit_transfer_event(&self, from: Option<AccountId>, to: Option<AccountId>, id: Id) {
            self.env().emit_event(Transfer { from, to, id });
        }

        /// Emit Approval event
        fn _emit_approval_event(
            &self,
            from: AccountId,
            to: AccountId,
            id: Option<Id>,
            approved: bool,
        ) {
            self.env().emit_event(Approval {
                from,
                to,
                id,
                approved,
            });
        }
    }
}
