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

  it('Correct status code', (done) => {
    request.get(baseUrl, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result', (done) => {
    request.get(baseUrl, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Server is accessible and working', (done) => {
    request.get(baseUrl, (err, res, body) => {
      expect(err).to.be.null;
      done();
    });
  });
});

