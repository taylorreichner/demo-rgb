const copyAndPush = require('./push');

describe('adds new item to end of array', () => {
    it('also keeps this old array',  () => {
        
       
        const originalNumbers = [
            1, 2, 3,  
        ]
        const newArray = copyAndPush(originalNumbers, 6);
        const expectedArray = [
            1, 2, 3, 6
        ]


        expect(newArray).toEqual(expectedArray)
    });
});