const { describe, it, beforeEach, afterEach } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const { expect } = require("chai");

describe("sendPaymentRequestToApi", function () {
  beforeEach("Set up spy for console.log", function () {
    sinon.spy(console, "log");
  });

  afterEach("Restore console.log spy", function () {
    console.log.restore();
  });

  it("should call console.log with the correct argument for (100, 20)", function () {
    sendPaymentRequestToApi(100, 20);

    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWithExactly("The total is: 120")).to.be.true;
  });

  it("should call console.log with the correct argument for (10, 10)", function () {
    sendPaymentRequestToApi(10, 10);

    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWithExactly("The total is: 20")).to.be.true;
  });
});
