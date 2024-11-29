const { expect } = require("chai");
const { describe, it } = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function () {
  describe("SUM", function () {
    it("should return the rounded sum of 1 and 2", function () {
      expect(calculateNumber("SUM", 1, 2)).to.equal(3);
    });

    it("should return the rounded sum of 1.6 and 2.6", function () {
      expect(calculateNumber("SUM", 1.6, 2.6)).to.equal(5);
    });
  });

  describe("SUBTRACT", function () {
    it("should return the rounded subtraction of 1.4 and 2.3", function () {
      expect(calculateNumber("SUBTRACT", 1.4, 2.3)).to.equal(-1);
    });

    it("should return the rounded subtraction of 4.9 and 2.7", function () {
      expect(calculateNumber("SUBTRACT", 4.9, 2.7)).to.equal(2);
    });

    it("should return the rounded subtraction of -4.9 and -2.7", function () {
      expect(calculateNumber("SUBTRACT", -4.9, -2.7)).to.equal(-2);
    });
  });

  describe("DIVIDE", function () {
    it("should return the rounded division of 4 by 2", function () {
      expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
    });

    it("should return the rounded division of 4.6 by 1.8", function () {
      expect(calculateNumber("DIVIDE", 4.6, 1.8)).to.equal(2.5);
    });

    it("should return 'Error' for division by 0", function () {
      expect(calculateNumber("DIVIDE", 4, 0)).to.equal("Error");
    });
  });
});
