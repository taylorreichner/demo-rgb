const getName = require('./name');

describe('gets name function', () => {
    it('takes in an object and returns the name',  () => {
        const name = getName({
            name: 'spot', age: 5, weight: '20 lbs'
        });
        expect(name).toEqual('spot')
    });
});