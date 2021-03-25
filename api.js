const fetch = require('node-fetch');



const getQuote = async () => {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    const body = await res.json();
    const quote = body[0];

    return {
        name: quote.character,
        text: quote.quote,
        image: quote.image,
    }
};





module.exports = getQuote;