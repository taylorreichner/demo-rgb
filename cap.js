const capitalizeAndFilter = (array) => {
    
   const empty = [];


    for(let strings of array) { 
            
        if (strings.charAt(0) !== 'f') {
    
            empty.push(strings.toUpperCase());
        }
    }    
        return empty;
    
};


module.exports = capitalizeAndFilter
