// Config, importing the modules

const express = require('express')
const path = require('path')
const app = express()


require('dotenv').config()


app.use('/', express.static(path.join(__dirname, 'client')))


app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.get('/api/properties', require('./controllers/properties_get'))
app.get('/api/countrieslist', require('./controllers/countries_get'))
app.get('/api/countrieslistpar/:id', require('./controllers/countries_with_paramID_get'))
app.get('/api/citieslist', require('./controllers/cities_get'))
app.get('/api/citieslistpar/:id', require('./controllers/cities_with_paramID_get'))
app.get('/api/plus', require('./controllers/plus_get'))

app.listen(process.env.PORT, () => {
    console.log(`Connected to localhost ${process.env.PORT}`)
})