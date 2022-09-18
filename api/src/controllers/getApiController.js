const axios = require('axios');

const getCountries = async ()=>{
    const url = await axios.get('https://restcountries.com/v3/all')
    const apiInfo = await url.data.map( c => {
      return{
        id : c.cca3,
        name: c.name.common,
        flags: c.flags[1],
        continents: c.continents[0],
        capital: c.capital || ['No tiene capital'],
        subregion: c.subregion || ['No hay datos de subregión'],
        area: c.area,
        population: c.population
      };
    });
    return apiInfo;
};

module.exports = {
    getCountries,
}