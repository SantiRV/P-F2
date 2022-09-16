const { getCountries } = require('./getApiController');
const { getDbInfo } = require('./getDbController');

const getAllCountries = async () => {
    const apiInfo = await getCountries();
    const dbInfo = await getDbInfo();
    const infoCountryTotal = apiInfo.concat(dbInfo)
    return infoCountryTotal
};

module.exports = {
    getAllCountries,
}