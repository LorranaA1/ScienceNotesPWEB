var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController");

router.get('/createUser/:code/:email/:name/:image/:username/:birthdate/:password', usersController.create);
router.get('/login/:username/:password', usersController.login);
router.post('/recoverPassword/:email/:newPassword', usersController.update);
router.get('/recoverPassword/:email/:newPassword', usersController.update);

module.exports = router;
