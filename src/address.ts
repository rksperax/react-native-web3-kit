const ETH_ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;

/** Returns true when value is a checksummed or lowercase EVM address. */
export function isValidAddress(value: string): boolean {
  return ETH_ADDRESS_REGEX.test(value.trim());
}

/** Shortens an EVM address for display, e.g. 0x1234...abcd */
export function formatAddress(address: string, visibleChars = 4): string {
  const normalized = address.trim();

  if (!isValidAddress(normalized)) {
    throw new Error("Invalid EVM address");
  }

  if (visibleChars <= 0) {
    return normalized;
  }

  const prefix = normalized.slice(0, 2 + visibleChars);
  const suffix = normalized.slice(-visibleChars);
  return `${prefix}...${suffix}`;
}

/** Compares two addresses case-insensitively. */
export function addressesEqual(a: string, b: string): boolean {
  return a.trim().toLowerCase() === b.trim().toLowerCase();
}
