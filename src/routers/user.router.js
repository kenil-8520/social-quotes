const express = require('express');
const {userRegistration, userLogin, forgotPassword, resetPassword, changePassword, logOut} = require('../controllers/user.controller.js')
const verifyToken = require('../middleware/auth.middleware.js');
const {createUser, passwordValidation} = require('../middleware/validator.middleware.js')


const router = express.Router();

router.post('/sign-up', createUser, userRegistration);

router.post('/login', userLogin);

router.post('/forgot-password', forgotPassword);

router.post('/reset-password', resetPassword);

router.post('/change-password', verifyToken, passwordValidation, changePassword);

router.post('/logout', verifyToken, logOut);

module.exports = router;
