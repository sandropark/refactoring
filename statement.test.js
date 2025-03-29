const statement = require("./statement");
const fs = require("fs");

const invoices = JSON.parse(fs.readFileSync("invoices.json", "utf8"));
const plays = JSON.parse(fs.readFileSync("plays.json", "utf8"));

describe("statement", () => {
  it("should return the correct statement", () => {
    const result = statement(invoices[0], plays);
    expect(result).toBe(
      "청구 내역 (고객명: BigCo)\n" +
        "Hamlet: $650.00 (55석)\n" +
        "As You Like It: $580.00 (35석)\n" +
        "Othello: $500.00 (40석)\n" +
        "총액: $1,730.00\n" +
        "적립 포인트: 47점\n"
    );
  });
});
