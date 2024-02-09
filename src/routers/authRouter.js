const express = require('express');
const {userRegistration, userLogin, forgotPassword, resetPassword} = require('../controllers/authController.js')
const verifyToken = require('../middleware/authMiddleware');


const router = express.Router();

router.post('/sign-up', userRegistration);

router.post('/login', userLogin);

router.post('/forgot-password', forgotPassword);

router.post('/reset-password', resetPassword);

module.exports = router;
