const express = require('express');
const {createQuote, listQuotes, commentQuotes, deleteQuotes, likeQuotes, dislikeQuotes} = require('../controllers/quoteController.js');
const {getQuotes} = require('../controllers/adminController.js')
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create-quote', verifyToken, createQuote);

router.get('/get-my-quote', verifyToken, listQuotes);

router.get('/get-quote', verifyToken, getQuotes);

router.delete('/delete-quote', verifyToken, deleteQuotes);

router.put('/comment-quote', verifyToken, commentQuotes);

router.put('/like', verifyToken, likeQuotes);

router.put('/dislike', verifyToken, dislikeQuotes);

module.exports = router;
