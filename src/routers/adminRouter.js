const express = require('express');
const {getUsers, deleteUser, getQuotes, deleteQuotes, updateQuotes} = require('../controllers/adminController');
const verifyToken = require('../middleware/authMiddleware');


const router = express.Router();

router.get('/get-users', verifyToken, getUsers);

router.delete('/delete-user', verifyToken, deleteUser);

router.get('/get-quotes', verifyToken, getQuotes);

router.delete('/delete-quotes', verifyToken, deleteQuotes);

router.put('/edit-quotes', verifyToken, updateQuotes);

module.exports = router;
