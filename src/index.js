const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const userRouter = require('./routers/userRouter.js')
const quoteRoter = require('./routers/quoteRouter.js')

dotenv.config();

const app = express()
var corOptions = {
    origin: 'https://localhost:8081'
}

app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) =>{
    res.json({message : "API working"})
})

app.use('/v1', userRouter, quoteRoter)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})