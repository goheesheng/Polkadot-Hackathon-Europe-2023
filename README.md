# Polkadot-Hackathon-Europe-2023
# **RMRK NFT** NFT minting site

## This dApp enables users to create and deploy NFT in RMRK standard.
### RMRK (pronounced "remark") is a set of NFT legos that give NFTs infinite extensibility, hosted on the Kusama blockchain, Polkadot's canary network, without the need for parachains or smart contracts.

- The image given by user is stored on IPFS
- Metadata for the image is stored on IPFS
- This site is deployed for Shibuya and Shiden networks
- Used wallet (browser extension) is Polkadot.js
- Contract is deployed using Polkadot.js API

We have never touched Rust and ink! programming language before the Polkadot Hackathon Europe 2023. Thus being a beginner.
We ask for you understanding.

## Contact information
 - Goh Ee Sheng - https://goheesheng.github.io/
 - Yeo Jong Han - yeojonghan@hotmail.com
 - Poon Kang Wei - kang5647@hotmail.com
 - Derrick Png Teck Guan - derrickpng34@gmail.com

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

## Folders Directory
The project folder consists of : 
1. **Contracts**
2. **Frontend**

I've created 2 NFT folders in the **Contracts** folder, one for **__PSP34__** standard, the other for **__RMRK__** standard

### For testing website 

Local Node (Astar) 
```bash 
./astar --port 30333 --ws-port 9944 --rpc-port 9933 --rpc-cors all --alice --dev
```
If you want to save the instance of smart contract in your local node so that it won't be discarded every time you close the local node, create a new folder for the local node to save its data in: 

```bash
./astar --port 30333 --ws-port 9944 --rpc-port 9933 --rpc-cors all --alice --dev --base-path [YOUR FOLDER]
```
Check [local explorer](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer) 

After running 
```ts 
cargo contract build 
```
on the desired smart contract, navigate to ***/frontend/contracts/***, create a new folder if the smart contract folder isn't there already, and copy the **metadata.json** file to this folder. Create **address.json** to store the contract's address for use in ***/src/deployment/deployments.ts***

note: Smart contracts uploaded to the development chain are wiped out upon system exit. So need to reconfigure the **address.json** each time we rerun the local node and re-upload the smart contract

## Frontend 

### Getting started 


```bash
cd nft-marketplace
npm install 
npm run dev
```
### setup for different network 

The network I've set for this repo is the **Shibuya** testnet. 
You can change the network to **alephzeroTestnet, astar, development(for local node)** by going to **.env.local** and change the environment variable:
```ts
NEXT_PUBLIC_DEFAULT_CHAIN=YOUR_PREFERRED_NETWORK
NEXT_PUBLIC_SUPPORTED_CHAINS=["YOUR_PREFERRED_NETWORK"]
```

### use-Inkathon library 
https://github.com/scio-labs/use-inkathon/tree/main/src 


