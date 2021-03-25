const capitalizeAndFilter = (array) => {
    
   const reg = /^(?!F)\w+/g;

   const uppercasses = array.map(letter => letter.toUpperCase())
   const filterF = uppercasses.filter(letter => letter.match(reg))
   return filterF;

  
    
   
};
    



module.exports = capitalizeAndFilter
