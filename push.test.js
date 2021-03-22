const copyAndPush = require('./push');

describe('adds new item to end of array', () => {
    it('takes in an array and adds new item to end of array',  () => {
        
       
        const originalNumbers = [
            1, 2, 3,  
        ]
        const newArray = copyAndPush(originalNumbers, 4);
        const expectedArray = [
            1, 2, 3, 4
        ]


        expect(newArray).toEqual(expectedArray)
    });
});