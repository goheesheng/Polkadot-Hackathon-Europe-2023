# RMRK ink!

Implementation of RMRK protocol in ink! Smart contract language


## Quick start

1. Make sure you have the [latest cargo contract](https://crates.io/crates/cargo-contract)


2. Compile & Build

```sh
cd ./examples/
choose either folder equipable or mintable
cargo +nightly-2022-08-15 contract build
```

3.
```
The compiled contract is in the directory /target/ink/

If you want to manually test, firstly run local substrate-node.
Then perform either of the following:
For contract UI you can check this github repository: (https://github.com/paritytech/contracts-ui)

OR

Use Polkadot Contract UI (https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/chainstate/raw)
```

3. Run ink! unit tests on local swanky node 

```sh
Use swanky node
cargo test
```

4. Integration test
```sh
yarn
yarn compile
yarn test
````

