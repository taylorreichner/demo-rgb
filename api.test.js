const getQuote = require('./api')

describe('getQuote functions', () => {
    it('gets a random quote', async () => {
        const quote = await getQuote();
        expect(quote).toEqual({
            name: expect.any(String),
            text: expect.any(String),
            image: expect.any(String),
        });
    });
});