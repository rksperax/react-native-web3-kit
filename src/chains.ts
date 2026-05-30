export type SupportedChain = {
  id: number;
  name: string;
  nativeCurrency: { name: string; symbol: string; decimals: number };
  rpcUrl: string;
  blockExplorer: string;
};

export const CHAINS: Record<string, SupportedChain> = {
  ethereum: {
    id: 1,
    name: "Ethereum",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrl: "https://eth.llamarpc.com",
    blockExplorer: "https://etherscan.io",
  },
  polygon: {
    id: 137,
    name: "Polygon",
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
    rpcUrl: "https://polygon-rpc.com",
    blockExplorer: "https://polygonscan.com",
  },
  arbitrum: {
    id: 42161,
    name: "Arbitrum One",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrl: "https://arb1.arbitrum.io/rpc",
    blockExplorer: "https://arbiscan.io",
  },
  base: {
    id: 8453,
    name: "Base",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrl: "https://mainnet.base.org",
    blockExplorer: "https://basescan.org",
  },
};

export function getChainById(chainId: number): SupportedChain | undefined {
  return Object.values(CHAINS).find((chain) => chain.id === chainId);
}

export function getExplorerAddressUrl(chainId: number, address: string): string | null {
  const chain = getChainById(chainId);
  return chain ? `${chain.blockExplorer}/address/${address}` : null;
}

export function getExplorerTxUrl(chainId: number, hash: string): string | null {
  const chain = getChainById(chainId);
  return chain ? `${chain.blockExplorer}/tx/${hash}` : null;
}
