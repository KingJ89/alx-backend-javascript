const { describe, it } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function () {
  it("should stub Utils.calculateNumber and verify console output", function () {
    // Spy on console.log
    const consoleSpy = sinon.spy(console, "log");

    // Stub Utils.calculateNumber to return a fixed value
    const calculateStub = sinon.stub(Utils, "calculateNumber").returns(10);

    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assertions for console.log and stub behavior
    assert(consoleSpy.withArgs("The total is: 10").calledOnce, "console.log was not called with expected arguments");
    assert(calculateStub.withArgs("SUM", 100, 20).calledOnce, "Utils.calculateNumber was not called with expected arguments");

    // Restore the stub and spy
    calculateStub.restore();
    consoleSpy.restore();
  });
});
