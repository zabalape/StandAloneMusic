const express = require('express');
const {validatorRegisterItem, validatorLoginItem, validatorPermission} = require('../validator/auth')
const {loginController, registerController} = require('../controllers/auth')
const router = express.Router();

router.post('/register', validatorRegisterItem, registerController)
router.post('/login', validatorLoginItem, loginController)

module.exports = router;