const express = require('express');
const {userRegistration, userLogin, forgotPassword, resetPassword, logOut} = require('../controllers/userController.js')
const verifyToken = require('../middleware/authMiddleware.js');
const {createUser} = require('../middleware/validator.js')


const router = express.Router();

router.post('/sign-up', createUser, userRegistration);

router.post('/login', userLogin);

router.post('/forgot-password', forgotPassword);

router.post('/reset-password', resetPassword);

router.post('/logout', verifyToken, logOut);

module.exports = router;
