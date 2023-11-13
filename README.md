# Hardhat Template

Contains a single contract that allows each user to save and read their own stored string value.

Directories inside of `hardhat` directory

-   `contracts`: Solidity contracts
-   `test`: Tests for Solidity contracts
-   `scripts`: Scripts for deploying contracts (typically not modified)
-   `hardhat.config.js`: Hardhat configuration file (e.g. adding more network deployment options)

## Pre-requisites

1. Install this Solidity VSCode extension: https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity
2. Install `pnpm` package manager: `npm i -g pnpm`

## Setup

```bash
pnpm i
```

## Compile & test contract

```bash
pnpm compile

pnpm test
```

## Deploy on local hardhat node

```bash
pnpm run deploy
```

## Deploy on Polygon zkEVM testnet

1. Set `ACCOUNT_PRIVATE_KEY` (e.g. Metamask account private key) in a `.env` file

```env
ACCOUNT_PRIVATE_KEY=<your private key>
```

2. Deploy contract under you account address

```bash
pnpm deploy:zkEVM
```
