const { Country, Activity } = require('../db');

const getDbInfo = async () => {
    return await Country.findAll({
      include: {
        model: Activity,
        attibutes: ['name'],
        through: {
          attibutes: []
        }
      }
    });
};

module.exports = {
    getDbInfo,
}