# Polkadot-Hackathon-Europe-2023

### To build and compile contracts:
```
cd Polkadot-Hackathon-Europe-2023/contracts/contracts/shiden34
cargo contract build --release
```

### You can use whatever node you want. 
### E.g Substrate node, Astar node or Swanky node.
The following link uses substrate node:
`https://docs.substrate.io/install/linux/`
`https://use.ink/getting-started/running-substrate`

Substrate Contracts UI is a web application for deploying and interacting with WASM smart contracts on Substrate blockchains that include the FRAME Contracts Pallet.
`https://github.com/paritytech/contracts-ui`

## Frontend 

### Getting started 


```bash
cd nft-marketplace
npm install 
npm run dev
```
### setup for different network 

The network I've set for this repo is the Shibuya testnet. 
You can change the network to **alephzeroTestnet, astar, development(for local node)** by going to **.env.local** and change the environment variable:
```ts
NEXT_PUBLIC_DEFAULT_CHAIN=YOUR_PREFERRED_NETWORK
NEXT_PUBLIC_SUPPORTED_CHAINS=["YOUR_PREFERRED_NETWORK"]
```

### use-Inkathon library 
https://github.com/scio-labs/use-inkathon/tree/main/src 


