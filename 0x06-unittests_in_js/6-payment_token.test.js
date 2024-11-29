const getPaymentTokenFromAPI = require("./6-payment_token");
const { describe, it } = require("mocha");
const { expect } = require("chai");

describe("getPaymentTokenFromAPI", function () {
  it("should return a resolved promise with the correct data when true is passed", function (done) {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.have.property("data", "Successful response from the API");
      done();
    }).catch((err) => done(err)); // Handle unexpected errors
  });
});
