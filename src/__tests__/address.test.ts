import { describe, expect, it } from "vitest";
import { addressesEqual, formatAddress, isValidAddress } from "../address";

describe("address utilities", () => {
  const sample = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";

  it("validates EVM addresses", () => {
    expect(isValidAddress(sample)).toBe(true);
    expect(isValidAddress("0x123")).toBe(false);
    expect(isValidAddress("not-an-address")).toBe(false);
  });

  it("formats addresses for display", () => {
    expect(formatAddress(sample)).toBe("0x742d...f44e");
    expect(formatAddress(sample, 6)).toBe("0x742d35...38f44e");
  });

  it("compares addresses case-insensitively", () => {
    expect(
      addressesEqual(
        "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        "0x742d35cc6634c0532925a3b844bc454e4438f44e"
      )
    ).toBe(true);
  });
});
