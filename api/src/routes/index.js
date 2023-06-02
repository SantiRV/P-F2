const { Router } = require('express'); 
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const teamController = require('../controllers/TeamController');
const  messageController = require('../controllers/MessageController');
const  appreciationController = require('../controllers/AppreciationController');
const  userController = require('../controllers/UserController');




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Rutas team
router.get('/teams', teamController.getAllTeams);
router.post('/teams', teamController.createTeam);
router.get('/teams/:id', teamController.getTeamById);
router.put('/teams/:id', teamController.updateTeam);
router.delete('/teams/:id', teamController.deleteTeam);

//Rutas Message
router.get('/messages', messageController.getAllMessages);
router.post('/messages', messageController.createMessages);
router.get('/message/:id', messageController.getMessageById);
router.delete('/message/:id', messageController.deleteMessage);

//Rutas Appreciation
router.get('/appreciations', appreciationController.getAppreciations);
router.post('/appreciations', appreciationController.createAppreciation);
router.get('/appreciations/:id', appreciationController.getAppreciationsById);
router.put('/appreciations/:id', appreciationController.updateAppreciation);
router.delete('/appreciations/:id', appreciationController.deleteAppreciation);

//Rutas User
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);



module.exports = router;
