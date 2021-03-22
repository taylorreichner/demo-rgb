const getName = require('./name');

describe('gets name function', () => {
    it('takes in an object and returns the name',  () => {
        const spot = getName({
            name: 'spot', age: 5, weight: '20 lbs'
        });
        expect(spot).toEqual('spot')
    });
});
describe('gets name function', () => {
    it('takes in an object and returns the name',  () => {
        const character = getName({
             _id: '5cf5679a915ecad153ab68c9', name: 'Aang' 
        });
        expect(character).toEqual('Aang')
    });
});