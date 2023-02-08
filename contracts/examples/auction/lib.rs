#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

use ink_lang as ink;

#[ink::contract]
pub mod Auction {

    use ink_lang::codegen::{
        EmitEvent,
        Env,
    };
    
    use ink_storage::traits::SpreadAllocate;
    
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
        },
    };

    use rmrk::{
        storage::*,
        traits::*,
        Config as RmrkConfig,
    };

    /// Defines the storage of your contract.
    /// Add new fields to the below struct in order
    /// to add new static storage fields to your contract.
    #[ink(storage)]
    #[derive(Default, SpreadAllocate, Storage)]
    pub struct Auction {
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
        nft: Id,
        /// The owner of the auction
        owner: AccountId,
        /// The initial price of the NFT
        initial_price: Balance,
        /// The deadline of the auction
        deadline: Timestamp,
        /// The highest bid of the auction
        high_bid: Balance,
        /// The highest bidder of the auction
        high_bidder: AccountId,
        /// Whether the auction is completed
        completed: bool,
        /// Whether the auction is cancelled
        cancelled: bool,
    }

    #[ink(event)]
    pub struct NewAuction {
        nft: Id,
        initial_price: Balance,
        deadline: Timestamp,
    }

    #[ink(event)]
    pub struct BidPlaced {
        bid: Balance,
        bidder: AccountId,
    }

    #[ink(event)]
    pub struct Transfer {
        #[ink(topic)]
        from: Option<AccountId>,
        #[ink(topic)]
        to: Option<AccountId>,
        #[ink(topic)]
        nft: Id,
    }

    #[ink(event)]
    pub struct Approval {
        #[ink(topic)]
        from: AccountId,
        #[ink(topic)]
        to: AccountId,
        #[ink(topic)]
        nft: Option<Id>,
        approved: bool,
    }

    impl PSP34 for Auction {}

    impl Ownable for Auction {}

    impl PSP34Metadata for Auction {}

    impl PSP34Enumerable for Auction {}

    impl Minting for Auction {}


    impl Auction {
        #[ink(constructor)]
        pub fn new(nft: Id, initial_price: Balance, deadline: Timestamp, completed: bool, cancelled: bool) -> Self {
            let owner = Self::env().caller();
            ink_lang::codegen::initialize_contract(|instance: &mut Auction| {
                RmrkConfig::config(
                    owner: owner,
                    nft: nft,
                    initial_price: initial_price,
                    deadline: deadline,
                    high_bid: initial_price,
                    high_bidder: owner,
                    completed: completed,
                    cancelled: cancelled,
                )
            })
        }
    
       #[ink(message)]
       pub fn place_bid(&mut self, bid: Balance) {
           // Check if the auction has been cancelled or completed
           assert!(!self.cancelled, "Auction has been cancelled");
           assert!(!self.completed, "Auction has already been completed");
           // Check if the auction deadline has passed
           assert!(self.env().block_timestamp() <= self.deadline, "Auction deadline has passed");
           // Check if the bid amount is greater than the current high bid
           assert!(bid > self.high_bid, "Bid must be higher than current high bid");
           // Deduct the bid amount from the caller's account
        //    self.env().transfer_from_ink_well(bid)?;
           // Transfer the current high bid deposit to the previous high bidder
           self.env().transfer(self.high_bidder, self.high_bid);
           // Update the high bid and high bidder information
           self.high_bid = bid;
           self.high_bidder = self.env().caller();
       }
    
        #[ink(message)]
        pub fn cancel_auction(&mut self) {
            // Check if the caller is the owner of the auction
            assert_eq!(self.owner, self.env().caller(), "Only the owner can cancel the auction");
            // Check if the auction has already been completed
            assert!(!self.completed, "Auction has already been completed");
            // Check if there are no bids placed yet
            assert!(self.high_bidder == self.owner, "Cannot cancel auction if there are bids placed");
            // Set the cancelled flag to true
            self.cancelled = true;
            // Transfer the NFT back to the owner
            // self.nft.transfer(self.owner);

            // This is not right, nft address != nft owner address
            // self.nft = _emit_transfer_event;
        }
    
        #[ink(message)]
        pub fn close_auction(&mut self) {
            // Check if the auction has already been completed
            assert!(!self.completed, "Auction has already been completed");
            // Check if the auction deadline has passed
            assert!(self.env().block_timestamp() >= self.deadline, "Auction has not ended yet");
            // Set the completed flag to true
            self.completed = true;
            // Check if the auction was cancelled
            if self.cancelled {
                // Transfer the NFT back to the owner
                // self.nft.transfer(self.owner);
                
                // This is not right, nft address != nft owner address
                self.nft = 1;
            } else {
                // Transfer the NFT to the highest bidder
                // self.nft.transfer(self.high_bidder);

                // This is not right, nft address != nft owner address
                self.nft = self.high_bidder;

                // Transfer the funds to the owner
                self.env().transfer(self.owner, self.high_bid);
            }
        }
    
        #[ink(message)]
        pub fn claim_nft(&mut self) {
            // Check if the auction has already been completed
            assert!(self.completed, "Auction has not completed yet");
            // Check if the caller is the high bidder
            assert_eq!(self.high_bidder, self.env().caller(), "You are not the winning bidder");
            // Transfer the NFT to the high bidder
            // self.nft.transfer(self.high_bidder);

            // This is not right, nft address != nft owner address
            self.nft = self.high_bidder;
        }
    }

    impl psp34::Internal for Auction {
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
