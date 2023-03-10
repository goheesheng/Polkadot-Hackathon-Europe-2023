//! RMRK minting traits

use ink_prelude::string::String as PreludeString;
use ink_prelude::collections::BTreeMap;
use openbrush::{
    contracts::psp34::PSP34Error,
    traits::{
        AccountId,
        Balance,
    },
};

#[openbrush::wrapper]
pub type MintingRef = dyn Minting;

/// Trait definitions for Minting functions
#[openbrush::trait_definition]
pub trait Minting {
    /// Mint next available token for the caller.
    #[ink(message, payable)]
    fn mint_next(&mut self) -> Result<(), PSP34Error>;

    /// Mint one or more tokens.
    #[ink(message, payable)]
    fn mint(&mut self, to: AccountId, mint_amount: u64) -> Result<(), PSP34Error>;

    /// Mint next available token with specific metadata
    #[ink(message, payable)]
    fn mint_with_metadata(
        &mut self,
        metadata: PreludeString,
        to: AccountId,
        nft_price: Balance,
        royalty_pct: u8,
    ) -> Result<(), PSP34Error>;

    /// Get max supply of tokens.
    #[ink(message)]
    fn max_supply(&self) -> u64;

    /// Get token mint price.
    #[ink(message)]
    fn price(&self) -> Balance;

    /// Get URI for the token Id.
    #[ink(message)]
    fn get_metadata(&self, token_id: u64) -> BTreeMap<PreludeString, PreludeString>;
}
