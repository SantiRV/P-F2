const { Router } = require('express');
const router = Router();
const { getAllCountries } = require('../controllers/getAllCountries');


// Ruta para obtener todos los paises y su respectiva info
router.get("/", async (req, res) => {
    const {name} = req.query;
    let countriesTotal = await getAllCountries();
    if(name){
        let countryName = await countriesTotal.filter( c=> c.name.toLowerCase().includes(name.toLocaleLowerCase()))
        countryName.length ? 
        res.status(200).send(countryName) :
        res.status(404).send('No se encontró el país')
    } else {
        res.status(200).send(countriesTotal)
    }
});
  
//Ruta por idPais
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const totalCountries = await getAllCountries();
    if(id){
        let countriesID = await totalCountries.filter( c => c.id === id)
        countriesID.length ?
        res.status(200).json(countriesID) :
        res.status(404).send('No se encontró el país')
    }
});


module.exports = router;