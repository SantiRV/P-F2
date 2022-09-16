const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const activityRouter = require('./activities');
const countryRouter = require('./countries');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countryRouter); //rutas countries
router.use('/activities', activityRouter); //rutas activities



module.exports = router;
