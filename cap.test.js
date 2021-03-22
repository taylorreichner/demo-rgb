const capitalizeAndFilter = require('./cap')

describe('caps all letters and filters out strings that start with f', () => {
    it('takes it in', () => {
        const theStrings = [
            'hello',
            'good morning',
            'failure to compute',
        ];
        const strings = [
            'HELLO',
            'GOOD MORNING'
            
        ];
        const newString = capitalizeAndFilter(theStrings)
   
        expect(strings).toEqual(newString)
    });
    
})