# Polkadot-Hackathon-Europe-2023
# **RMRK NFT** minting site

## Challenge Category: Ink! Smart Contracts
- **Bounty:** **Build NFT project (marketplace) with ink!**
    - User should be able to mint the NFT through a friendly UI.
    - User should be able to view the minted NFT.
    - NFTs are minted as PSP34 and created with ink! smart contracts.
    - Add concise documentation about the features and how to use your product.

## This dApp enables users to create and deploy NFT in RMRK standard.
### RMRK (pronounced "remark") is a set of NFT legos that give NFTs infinite extensibility, hosted on the Kusama blockchain, Polkadot's canary network, without the need for parachains or smart contracts.

- The image given by user is stored on IPFS
- Metadata for the image is stored on IPFS
- This site is deployed for Shibuya and Shiden networks
- Used wallet (browser extension) is Polkadot.js
- Contract is deployed using Polkadot.js API

We have never touched Rust and ink! programming language before the Polkadot Hackathon Europe 2023.
We ask for you understanding.

## Project Description: Building an NFT Marketplace using Ink! Programming Language

The goal of this project is to develop a decentralized Non-Fungible Token (NFT) marketplace using the Ink! programming language. The platform will be built on the Substrate framework, providing a robust and secure environment for transactions to take place.

Ink! is a modern, Rust-based programming language designed for building decentralized applications. It is known for its security and scalability, making it an ideal choice for developing an NFT marketplace. The project will use the Ink! contract system to define and enforce the rules of the marketplace, such as setting prices for NFTs, establishing ownership, and executing transactions.

The platform will be designed to support a wide range of NFTs, including digital art and collectibles. Users will be able to buy and sell NFTs. The platform will also offer a customizable user interface, allowing users to personalize their experience and make it easy to use.

One of the key features of the platform will be its robust security measures. The NFT marketplace will be built on the Substrate framework, providing a secure and decentralized environment for transactions to take place. Additionally, the platform will use advanced encryption and authentication methods to ensure the safety of users' NFTs and other assets.

Overall, this project will provide a comprehensive and user-friendly NFT marketplace that leverages the power of the Ink! programming language and the Substrate framework. Whether you're a seasoned NFT collector or just starting out, this platform will offer a secure and accessible way to participate in the growing NFT economy.

## How the project uses Substrate or other technology?

The project utilizes the Substrate framework to build the NFT marketplace. Substrate is a blockchain development platform that provides the necessary infrastructure and tools to build decentralized applications (dApps). It offers a modular and flexible architecture, allowing developers to easily build, test, and deploy dApps with a variety of features and functionalities.

By using Substrate, the project benefits from its built-in security and scalability features, as well as its ability to support multiple chains and networks. This allows the NFT marketplace to operate in a decentralized and trustless environment, ensuring that all transactions are secure and transparent.

In addition to Substrate, the project may also use other technologies to enhance its functionality and user experience. For example, the platform may use Interledger Protocol (ILP) to enable fast and efficient transfers between different blockchains, or use IPFS to store and retrieve digital assets in a decentralized manner.

Overall, the use of Substrate and other technologies helps to create a secure, scalable, and user-friendly NFT marketplace that leverages the latest advancements in blockchain technology.

## A list of tech stack (solutions, technology infrastructure, technology services, etc) used by the team to build your project.

Ink!: A modern, Rust-based programming language for building decentralized applications. The project will use Ink! to define and enforce the rules of the marketplace, such as setting prices for NFTs, establishing ownership, and executing transactions.

Substrate: A blockchain development platform that provides the infrastructure and tools to build decentralized applications. Substrate will serve as the underlying technology for the NFT marketplace, providing a secure and decentralized environment for transactions to take place.

Interledger Protocol (ILP): A technology used to transfer value between different ledgers, such as different blockchains or payment networks. ILP can be used to facilitate fast and efficient transfers between different cryptocurrencies, enabling the NFT marketplace to support a wide range of tokens.

IPFS: A decentralized, peer-to-peer file system that can be used to store and retrieve digital assets, such as NFTs. IPFS can help to ensure that digital assets are securely and efficiently stored and accessible to users of the NFT marketplace.

React: A JavaScript library for building user interfaces. React can be used to create a customizable and user-friendly interface for the NFT marketplace, allowing users to easily navigate and interact with the platform.

Blockchain Node: A server that runs a full copy of the blockchain ledger and can be used to validate and process transactions. The project use a Substrate node, such to ensure that the NFT marketplace is able to interact and execute transactions in a secure and efficient manner.

Further takeaways:
- Integrate auction smart contract to frontend (Smart Contract already done)
- Deploy to main net

## Contact information
 - Goh Ee Sheng - https://goheesheng.github.io/
 - Yeo Jong Han - yeojonghan@hotmail.com
 - Poon Kang Wei - kang5647@hotmail.com
 - Derrick Png Teck Guan - derrickpng34@gmail.com

# Demo
https://www.youtube.com/watch?v=4IuSFKVcUuY

### To build and compile contracts:
```
Go to /contracts/RMRK-NFT/examples/README.md
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

## References
[Ink!athon – DApp Boilerplate for Substrate & ink!](https://github.com/scio-labs/inkathon)



