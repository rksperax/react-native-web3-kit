const GWEI = 1_000_000_000n;

/** Converts gwei (bigint) to ETH string with configurable decimals. */
export function gweiToEth(gwei: bigint, decimals = 6): string {
  const negative = gwei < 0n;
  const absolute = negative ? -gwei : gwei;
  const whole = absolute / GWEI;
  const fraction = absolute % GWEI;

  const fractionStr = fraction.toString().padStart(9, "0").slice(0, decimals);
  const trimmedFraction = fractionStr.replace(/0+$/, "");

  const value = trimmedFraction.length
    ? `${whole}.${trimmedFraction}`
    : `${whole}`;

  return negative ? `-${value}` : value;
}

/** Shortens a transaction hash for UI display. */
export function formatTxHash(hash: string, visibleChars = 6): string {
  const normalized = hash.trim();

  if (!/^0x[a-fA-F0-9]{64}$/.test(normalized)) {
    throw new Error("Invalid transaction hash");
  }

  return `${normalized.slice(0, 2 + visibleChars)}...${normalized.slice(-visibleChars)}`;
}

/** Parses a user-entered decimal ETH amount into wei bigint. */
export function parseEthToWei(amount: string): bigint {
  const normalized = amount.trim();

  if (!/^\d+(\.\d+)?$/.test(normalized)) {
    throw new Error("Invalid ETH amount");
  }

  const [whole = "0", fraction = ""] = normalized.split(".");
  const fractionPadded = `${fraction}${"0".repeat(18)}`.slice(0, 18);
  return BigInt(whole) * 10n ** 18n + BigInt(fractionPadded || "0");
}
