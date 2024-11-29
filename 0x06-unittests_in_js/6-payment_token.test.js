const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise when success is true', (done) => {
        getPaymentTokenFromAPI(true).then((response) => {
            // Check the resolved object
            assert.deepStrictEqual(response, { data: 'Successful response from the API' });
            done(); // Call done to indicate the test is complete
        }).catch((error) => {
            done(error); // Pass error to done if the test fails
        });
    });

    it('should return undefined when success is false', () => {
        const result = getPaymentTokenFromAPI(false);
        assert.strictEqual(result, undefined); // Validate no promise is returned
    });
});
