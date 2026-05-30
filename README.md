# react-native-web3-kit

[![CI](https://github.com/rksperax/react-native-web3-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/rksperax/react-native-web3-kit/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/react-native-web3-kit.svg)](https://www.npmjs.com/package/react-native-web3-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)](https://www.typescriptlang.org/)

Lightweight **Web3 utilities** for React Native wallets and DeFi apps. Zero native dependencies — safe to use in Expo and bare React Native projects.

Built by [Rajan Kumar](https://github.com/rksperax) · Senior Frontend Developer · React Native · Web3

## Install

```bash
npm install react-native-web3-kit
# or
yarn add react-native-web3-kit
```

## Features

- **Address helpers** — validate, shorten, and compare EVM addresses
- **Amount formatting** — gwei ↔ ETH conversion, wei parsing
- **Chain metadata** — Ethereum, Polygon, Arbitrum, Base explorers & RPC URLs
- **App state hook** — reconnect wallet/RPC when app returns to foreground

## Usage

### Address formatting

```ts
import { formatAddress, isValidAddress } from "react-native-web3-kit";

if (isValidAddress(userInput)) {
  console.log(formatAddress(userInput)); // 0x742d...f44e
}
```

### ETH / gwei conversion

```ts
import { gweiToEth, parseEthToWei } from "react-native-web3-kit";

gweiToEth(1_500_000_000n); // "1.5"
parseEthToWei("0.25");     // 250000000000000000n
```

### Block explorer links

```ts
import { getExplorerTxUrl } from "react-native-web3-kit";

getExplorerTxUrl(1, "0xabc..."); // https://etherscan.io/tx/0xabc...
```

### Wallet reconnect on app resume (React Native)

```tsx
import { AppState } from "react-native";
import { useAppStateReconnect } from "react-native-web3-kit";

function WalletProvider({ children }) {
  useAppStateReconnect(async () => {
    await reconnectWallet();
  }, { AppState });

  return children;
}
```

## API

| Export | Description |
|--------|-------------|
| `isValidAddress` | Validate EVM address format |
| `formatAddress` | Shorten address for UI |
| `addressesEqual` | Case-insensitive address compare |
| `gweiToEth` | Convert gwei bigint to ETH string |
| `parseEthToWei` | Parse decimal ETH to wei |
| `formatTxHash` | Shorten transaction hash |
| `CHAINS` | Common chain metadata |
| `getChainById` | Lookup chain by ID |
| `getExplorerAddressUrl` | Block explorer address URL |
| `getExplorerTxUrl` | Block explorer tx URL |
| `useAppStateReconnect` | Reconnect callback on foreground |

## Development

```bash
npm install
npm test
npm run build
```

## Contributing

Issues and PRs welcome! See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT © [Rajan Kumar](https://github.com/rksperax)
