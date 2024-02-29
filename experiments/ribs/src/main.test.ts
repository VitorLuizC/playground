export {};

describe("x", () => {
  it("is a module", async () => {
    return expect(import("./main.js")).resolves.not.toBe(null);
  });
});
