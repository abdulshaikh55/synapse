const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { signupValidation, loginValidation } = require('../middlewares/authValidation');

router.post('/signup', signupValidation, authController.signup);

router.post('/login', loginValidation, authController.login);

module.exports = router;