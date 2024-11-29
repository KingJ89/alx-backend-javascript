const { describe, it } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function () {
  it("should call Utils.calculateNumber once", function () {
    // Create a spy for Utils.calculateNumber
    const spy = sinon.spy(Utils, "calculateNumber");

    // Call the function under test
    sendPaymentRequestToApi(50, 24.52);

    // Assert the spy was called exactly once
    assert.strictEqual(spy.calledOnce, true);

    // Restore the original function
    spy.restore();
  });
});
