# Hardhat Template

Contains a single contract that allows each user to save and read their own stored string value.

Directories inside of `hardhat` directory

-   `contracts`: Solidity contracts
-   `test`: Tests for Solidity contracts
-   `scripts`: Scripts for deploying contracts (typically not modified)
-   `hardhat.config.js`: Hardhat configuration file (e.g. adding more network deployment options)

## Setup

```bash
cd hardhat

npm i
```

## Compile & test contract

```bash
npm run compile

npm run test
```

## Deploy on Polygon zkEVM testnet

1. Set `ACCOUNT_PRIVATE_KEY` (e.g. Metamask account private key) in a `.env` file

```env
ACCOUNT_PRIVATE_KEY=<your private key>
```

2. Deploy contract under you account address

```bash
npm run deploy-zkEVM
```
