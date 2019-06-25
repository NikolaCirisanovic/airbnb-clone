// Config, importing the modules

const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config()


app.use('/', express.static(path.join(__dirname, 'client')))


app.get('/', (req, res) => {
    res.sendFile('index.html')
})



app.listen(process.env.PORT, () => {
    console.log("Connected to localhost 3000")
})