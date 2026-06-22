import { describe, expect, test } from "bun:test";
import { downsampleToAnsi256 } from "./colorDownsampler";

describe("ANSI Color Space Downsampler", () => {
  test("should perfectly match absolute black and white", () => {
    expect(downsampleToAnsi256("#000000")).toBe(0);
    expect(downsampleToAnsi256("#FFFFFF")).toBe(15);
  });

  test("should map bright pure green to an appropriate ANSI index", () => {
    const ansiGreen = downsampleToAnsi256("#00FF00");
    expect(ansiGreen).toBeDefined();
  });
});