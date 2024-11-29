const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const url = 'http://localhost:7865/';

  it('Correct status code?', (done) => {
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request(url, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865/cart/';

  it('Correct status code when :id is a number?', (done) => {
    request(`${baseUrl}12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result when :id is a number?', (done) => {
    request(`${baseUrl}12`, (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Correct status code when :id is NOT a number?', (done) => {
    request(`${baseUrl}hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('/available_payments endpoint', () => {
  const url = 'http://localhost:7865/available_payments';

  it('Correct status code?', (done) => {
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request(url, (err, res, body) => {
      const response = JSON.parse(body);
      expect(response).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});

describe('/login endpoint', () => {
  const url = 'http://localhost:7865/login';

  it('Correct status code and message when userName is provided', (done) => {
    request.post(
      {
        url,
        json: { userName: 'Betty' },
      },
      (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });

  it('Bad Request when userName is missing', (done) => {
    request.post(
      {
        url,
        json: {},
      },
      (err, res, body) => {
        expect(res.statusCode).to.equal(400);
        expect(body).to.equal('Bad Request');
        done();
      }
    );
  });
});
