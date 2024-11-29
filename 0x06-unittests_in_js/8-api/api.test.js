const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const url = 'http://localhost:7865/';

  it('Correct status code?', (done) => {
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200); // Check status code
      done();
    });
  });

  it('Correct result?', (done) => {
    request(url, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system'); // Check response body
      done();
    });
  });

  it('Other?', (done) => {
    request(url, (err, res, body) => {
      expect(res.headers['content-type']).to.include('text/html'); // Check headers
      done();
    });
  });
});
