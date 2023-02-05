#[ink(package)]
extern crate ink_core;

use ink_core::env;
use ink_core::memory::format;
use ink_core::storage;

#[ink(storage)]
struct Auction {
    /// The owner of the auction
    owner: storage::Value<AccountId>,
    /// The NFT being auctioned
    nft: storage::Value<NFT>,
    /// The initial price of the NFT
    initial_price: storage::Value<Balance>,
    /// The deadline of the auction
    deadline: storage::Value<Timestamp>,
    /// The highest bid of the auction
    high_bid: storage::Value<Balance>,
    /// The highest bidder of the auction
    high_bidder: storage::Value<AccountId>,
    /// Whether the auction is completed
    completed: storage::Value<bool>,
    /// Whether the auction is cancelled
    cancelled: storage::Value<bool>,
}

#[ink(event)]
struct NewAuction {
    nft: NFT,
    initial_price: Balance,
    deadline: Timestamp,
}

#[ink(event)]
struct BidPlaced {
    bid: Balance,
    bidder: AccountId,
}

impl Auction {
    #[ink(constructor)]
    pub fn new(nft: NFT, initial_price: Balance, deadline: Timestamp) -> Self {
        let owner = env::caller();
        Self {
            owner: storage::Value::new(owner),
            nft: storage::Value::new(nft),
            initial_price: storage::Value::new(initial_price),
            deadline: storage::Value::new(deadline),
            high_bid: storage::Value::new(initial_price),
            high_bidder: storage::Value::new(owner),
            completed: storage::Value::new(false),
            cancelled: storage::Value::new(false),
        }
    }

   #[ink(message)]
   pub fn place_bid(&mut self, bid: Balance) {
       // Check if the auction has been cancelled or completed
       assert!(!*self.cancelled, "Auction has been cancelled");
       assert!(!*self.completed, "Auction has already been completed");
       // Check if the auction deadline has passed
       assert!(ink::env::block_timestamp() <= *self.deadline, "Auction deadline has passed");
       // Check if the bid amount is greater than the current high bid
       assert!(bid > *self.high_bid, "Bid must be higher than current high bid");
       // Deduct the bid amount from the caller's account
       ink::env::transfer_from_ink_well(bid)?;
       // Transfer the current high bid deposit to the previous high bidder
       ink::env::transfer(*self.high_bidder, *self.high_bid)?;
       // Update the high bid and high bidder information
       *self.high_bid = bid;
       *self.high_bidder = ink::env::caller();
   }
#[ink(message)]
pub fn cancel_auction(&mut self) {
    // Check if the caller is the owner of the auction
    assert_eq!(*self.owner, ink::env::caller(), "Only the owner can cancel the auction");
    // Check if the auction has already been completed
    assert!(!*self.completed, "Auction has already been completed");
    // Check if there are no bids placed yet
    assert!(*self.high_bidder == *self.owner, "Cannot cancel auction if there are bids placed");
    // Set the cancelled flag to true
    *self.cancelled = true;
    // Transfer the NFT back to the owner
    self.nft.transfer(*self.owner);
}

#[ink(message)]
pub fn close_auction(&mut self) {
    // Check if the auction has already been completed
    assert!(!*self.completed, "Auction has already been completed");
    // Check if the auction deadline has passed
    assert!(ink::env::block_timestamp() >= *self.auction_deadline, "Auction has not ended yet");
    // Set the completed flag to true
    *self.completed = true;
    // Check if the auction was cancelled
    if *self.cancelled {
        // Transfer the NFT back to the owner
        self.nft.transfer(*self.owner);
    } else {
        // Transfer the NFT to the highest bidder
        self.nft.transfer(*self.high_bidder);
        // Transfer the funds to the owner
        ink::env::transfer_balance(*self.owner, *self.bid_amount);
    }
}

#[ink(message)]
pub fn claim_nft(&mut self) {
    // Check if the auction has already been completed
    assert!(*self.completed, "Auction has not completed yet");
    // Check if the caller is the high bidder
    assert_eq!(*self.high_bidder, ink::env::caller(), "You are not the winning bidder");
    // Transfer the NFT to the high bidder
    self.nft.transfer(*self.high_bidder);
}
