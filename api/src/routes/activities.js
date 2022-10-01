const { Country, Activity } = require('../db');
const { Router } = require('express');
const router = Router();


router.get('/', async (req, res) => {
    try {
        const allActivities = await Activity.findAll({
          include: Country
        })
       res.status(200).json(allActivities)
    } catch (error) {
       res.status(400).json({ error: "No se encontraron actividades" })
    }
 
});
 
router.post('/', async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
     try {
         const createActivity = await Activity.create({
             name,
             difficulty,
             duration,
             season
         });
        
         const findActivity = await Country.findAll({
           where: {
              name: countries,
           }
         });
 
        createActivity.addCountries(findActivity);
        return res.status(200).send(`La actividad ${name} ha sido creada`)
 
     } catch (error) {
       
        res.status(400).json({ error: "Los datos son incorrectos" })
     }
 
  });


module.exports = router;


// Ruta para desplegar actividades
// router.get('/activities', async (req, res) => {

//    const activities = await Activity.findAll();
//    if(activities) {
//      return res.status(200).json(activities);
//    } else {
//      return res.status(404).json(activities.length ? activities :"No se encontraron activdades"); 
//    }
 
//  });

// // Ruta para postear actividades
// router.post('/activities', async (req, res,) => {
//  try {
//    const {name, difficulty, duration, season, countries} = req.body
//    if(name && difficulty && duration && season && countries){
//        const activity = await Activity.create({
//                name,
//                difficulty,
//                duration,
//                season         
//            });

//        countries.forEach(async (id) => {
//            const country = await Country.findOne({
//                where: {id: {[Op.iLike]:`%${id}%`}}
//                    })
//            await country?.addActivity(activity);
//        })

//        return res.send(activity)
//    } else {
//        return res.status(404).json('Missing data')
//    }
// } catch (error) {
//    next(error)
// }
// }
// )