import { describe, expect, it } from "vitest";
import { formatTxHash, gweiToEth, parseEthToWei } from "../format";

describe("format utilities", () => {
  it("converts gwei to ETH", () => {
    expect(gweiToEth(1_500_000_000n)).toBe("1.5");
    expect(gweiToEth(2_000_000_000n)).toBe("2");
  });

  it("formats transaction hashes", () => {
    const hash =
      "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

    expect(formatTxHash(hash)).toBe("0xaaaaaa...aaaaaa");
  });

  it("parses ETH strings to wei", () => {
    expect(parseEthToWei("1")).toBe(10n ** 18n);
    expect(parseEthToWei("0.5")).toBe(5n * 10n ** 17n);
  });
});
