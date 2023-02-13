#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;
use pallet as storage;
use pallet_timestamp as timestamp;

#[ink::contract]
mod Auction {

    use rmrk_example_equippable::rmrk_example_equippable::RmrkRef;
    use ink_env::call::FromAccountId;

    use openbrush::{
        contracts::{
            psp34::extensions::{
                enumerable::*,
            },
        },
    };

    use openbrush::contracts::psp34::psp34_external::PSP34;

    use chrono::{
        NaiveDateTime,
    };

    /// Defines the storage of your contract.
    /// Add new fields to the below struct in order
    /// to add new static storage fields to your contract.
    #[ink(storage)]
    pub struct Auction {
        // NFT Contract
        rmrk_instance: RmrkRef,
        /// The owner of the auction
        owner: AccountId,
        /// The NFT being auctioned
        nft: Id,
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
        /// Whether the auction has been initialized
        initialized: bool,
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

    impl Auction {
        #[ink(constructor)]
        pub fn new(address: AccountId, nft: Id, initial_price: Balance, deadline: Timestamp) -> Self {
            let owner = Self::env().caller();
            let rmrk_instance: RmrkRef = FromAccountId::from_account_id(address);
            Self {
                rmrk_instance: rmrk_instance,
                owner: owner,
                nft: nft.clone(),
                initial_price: initial_price,
                deadline: deadline,
                high_bid: initial_price,
                high_bidder: owner,
                completed: false,
                cancelled: false,
                initialized: false,
            }
        }

       #[ink(message)]
        pub fn initialize_auction(&mut self) {
            assert!(!self.cancelled, "Auction has been cancelled");
            assert!(!self.completed, "Auction has already been completed");
            assert_eq!(Some(self.env().account_id()), self.rmrk_instance.owner_of(self.nft.clone()), "Smart contract needs to own the NFT first before opening the auction");
            self.initialized = true;
        }
    
       #[ink(message,payable)]
       pub fn place_bid(&mut self, bid: Balance) {
           // Check if the auction has been initialized, cancelled or completed
           assert!(self.initialized, "Auction needs to be initialized");
           assert!(!self.cancelled, "Auction has been cancelled");
           assert!(!self.completed, "Auction has already been completed");
           // Check if the auction deadline has passed
           assert!(self.env().block_timestamp() <= self.deadline, "Auction deadline has passed");
           // Check if the bid amount is greater than the current high bid
           assert!(bid > self.high_bid, "Bid must be higher than current high bid");
           // Deduct the bid amount from the caller's account
           let transferred = self.env().transferred_value();
           if transferred != bid {
            self.env().transfer(self.env().caller(),transferred);
            panic!("You need to transfer the amount that you bid");
           } else {
            // Transfer the current high bid deposit to the previous high bidder
            self.env().transfer(self.high_bidder, self.high_bid);
            // Update the high bid and high bidder information
            self.high_bid = bid;
            self.high_bidder = self.env().caller();
           }
       }
    
        #[ink(message)]
        pub fn cancel_auction(&mut self) {
            assert!(self.initialized, "Auction needs to be initialized");
            // Check if the caller is the owner of the auction
            assert_eq!(self.owner, self.env().caller(), "Only the owner can cancel the auction");
            // Check if the auction has already been completed
            assert!(!self.completed, "Auction has already been completed");
            // Check if there are no bids placed yet
            assert!(self.high_bidder == self.owner, "Cannot cancel auction if there are bids placed");
            // Set the cancelled flag to true
            self.cancelled = true;
            // Transfer the NFT back to the owner
            self.rmrk_instance.transfer(self.owner, self.nft.clone(), "Cancelled auction, returning NFT to owner".as_bytes().to_vec());
        }
    
        #[ink(message)]
        pub fn close_auction(&mut self) {
            assert!(self.initialized, "Auction needs to be initialized");
            // Check if the auction has already been completed
            assert!(!self.completed, "Auction has already been completed");
            // Check if the auction deadline has passed
            assert!(self.env().block_timestamp() >= self.deadline, "Auction has not ended yet");
            // Set the completed flag to true
            self.completed = true;
            // Check if the auction was cancelled
            if self.cancelled {
                // Transfer the NFT back to the owner
                assert_eq!(Some(self.owner), self.rmrk_instance.owner_of(self.nft.clone()), "Already returned NFT to owner");
                self.rmrk_instance.transfer(self.owner, self.nft.clone(), "Cancelled auction, returning NFT to owner".as_bytes().to_vec());
            } else {
                // Transfer the NFT to the highest bidder
                // Can remove this if you want the user to claim the nft manually
                self.rmrk_instance.transfer(self.high_bidder, self.nft.clone(), "Won auction for NFT".as_bytes().to_vec());
                // Transfer the funds to the owner
                self.env().transfer(self.owner, self.high_bid);
            }
        }
    
        #[ink(message)]
        pub fn claim_nft(&mut self) {
            assert!(self.initialized, "Auction needs to be initialized");
            // Check if the auction has already been completed
            assert!(self.completed, "Auction is yet to be completed");
            // Check if the caller is the high bidder
            assert_eq!(self.high_bidder, self.env().caller(), "You are not the winning bidder");
            // Check if caller is already owner
            assert_eq!(Some(self.high_bidder), self.rmrk_instance.owner_of(self.nft.clone()), "You already own this NFT");
            // Transfer the NFT to the high bidder
            self.rmrk_instance.transfer(self.high_bidder, self.nft.clone(), "Won auction for NFT".as_bytes().to_vec());
        }

        #[ink(message)]
        pub fn get_highest_bid_info(&self) -> (AccountId,Balance) {
            assert!(self.initialized, "Auction needs to be initialized");
            (self.high_bidder,self.high_bid)
        }

        #[ink(message)]
        #[pallet::storage]
        #[pallet::getter(fn my_date)]
        pub fn get_current_time(&self) -> u64 {
            let timestamp: <T as pallet_timestamp::Config>::Moment = <pallet_timestamp::Pallet<T>>::get();
        }
        // Time might be able to get from frontend and stored in backend
    }

}
