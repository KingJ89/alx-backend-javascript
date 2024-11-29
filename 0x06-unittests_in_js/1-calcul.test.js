const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function () {
  it("should return the sum of two rounded numbers (SUM, 1, 2)", function () {
    const res = calculateNumber("SUM", 1, 2);
    assert.strictEqual(res, 3);
  });

  it("should return the difference of two rounded numbers (SUBTRACT, 1.4, 2.2)", function () {
    const res = calculateNumber("SUBTRACT", 1.4, 2.2);
    assert.strictEqual(res, -1);
  });

  it("should return the difference of two rounded numbers (SUBTRACT, 4.9, 2.7)", function () {
    const res = calculateNumber("SUBTRACT", 4.9, 2.7);
    assert.strictEqual(res, 2);
  });

  it("should return the division of two rounded numbers (DIVIDE, 4, 2)", function () {
    const res = calculateNumber("DIVIDE", 4, 2);
    assert.strictEqual(res, 2);
  });

  it("should return 'Error' for division by zero (DIVIDE, 1.7, 0)", function () {
    const res = calculateNumber("DIVIDE", 1.7, 0);
    assert.strictEqual(res, "Error");
  });

  it("should return the division result of two rounded numbers (DIVIDE, 1.4, 4.6)", function () {
    const res = calculateNumber("DIVIDE", 1.4, 4.6);
    assert.strictEqual(res, 0.2);
  });
});
