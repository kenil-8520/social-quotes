const express = require('express');
const {userRegistration, userLogin, forgotPassword, resetPassword, changePassword, logOut} = require('../controllers/userController.js')
const verifyToken = require('../middleware/authMiddleware.js');
const {createUser, passwordValidation} = require('../middleware/validator.js')


const router = express.Router();

router.post('/sign-up', createUser, userRegistration);

router.post('/login', userLogin);

router.post('/forgot-password', forgotPassword);

router.post('/reset-password', resetPassword);

router.post('/change-password', verifyToken, passwordValidation, changePassword);

router.post('/logout', verifyToken, logOut);

module.exports = router;
