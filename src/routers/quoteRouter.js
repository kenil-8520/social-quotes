const express = require('express');
const {createQuote, listQuotes, deleteQuotes} = require('../controllers/quoteController.js');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create-quote', verifyToken, createQuote);

router.get('/get-quote', verifyToken, listQuotes);

router.delete('/delete-quote', verifyToken, deleteQuotes);

module.exports = router;
