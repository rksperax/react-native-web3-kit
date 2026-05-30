import { describe, expect, it } from "vitest";
import { getChainById, getExplorerTxUrl } from "../chains";

describe("chain utilities", () => {
  it("finds chains by id", () => {
    expect(getChainById(1)?.name).toBe("Ethereum");
    expect(getChainById(8453)?.name).toBe("Base");
    expect(getChainById(999)).toBeUndefined();
  });

  it("builds explorer transaction URLs", () => {
    const hash =
      "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

    expect(getExplorerTxUrl(1, hash)).toBe(
      `https://etherscan.io/tx/${hash}`
    );
  });
});
