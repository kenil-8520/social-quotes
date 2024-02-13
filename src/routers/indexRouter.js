const express = require('express')
const userRouter = require('../routers/userRouter.js')
const quoteRoter = require('../routers/quoteRouter.js')
const adminRouter = require('../routers/adminRouter.js')

const router = express.Router()

router.use("",userRouter, quoteRoter)
router.use("/admin",adminRouter)

module.exports = router;
