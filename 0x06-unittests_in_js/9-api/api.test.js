const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  // Before tests, start the server
  let server;
  before((done) => {
    server = require('./api');
    done();
  });

  // After tests, close the server
  after((done) => {
    server.close(() => done());
  });

  it('Correct status code for index page', (done) => {
    request.get(baseUrl, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865';

  it('Correct status code when :id is a number', (done) => {
    request.get(`${baseUrl}/cart/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Correct status code when :id is NOT a number (should return 404)', (done) => {
    request.get(`${baseUrl}/cart/hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('Correct status code for an invalid cart ID format', (done) => {
    request.get(`${baseUrl}/cart/123abc`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
