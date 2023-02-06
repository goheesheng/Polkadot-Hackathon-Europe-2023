#![cfg_attr(not(feature = "std"), no_std)]

#[cfg(feature="mintable")]
mod config;

#[cfg(feature="mintable")]
pub use config::Config;

pub mod errors {
    pub use rmrk_common::errors::*;
}

pub mod types {
    pub use rmrk_common::types::*;
}

pub mod utils {
    pub use rmrk_common::utils::*;
}

pub mod storage {
    #[cfg(feature="mintable")]
    pub use rmrk_minting::*;
    #[cfg(feature="auction")]
    pub use rmrk_base::*;
    #[cfg(feature="auction")]
    pub use rmrk_auction::*;
    #[cfg(feature="auction")]
    pub use rmrk_multiasset::*;
    #[cfg(feature="auction")]
    pub use rmrk_nesting::*;
}

pub mod traits {
    #[cfg(feature="mintable")]
    pub use rmrk_minting::traits::*;
    #[cfg(feature="auction")]
    pub use rmrk_base::traits::*;
    #[cfg(feature="auction")]
    pub use rmrk_auction::traits::*;
    #[cfg(feature="auction")]
    pub use rmrk_multiasset::traits::*;
    #[cfg(feature="auction")]
    pub use rmrk_nesting::traits::*;
}


