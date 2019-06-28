// Config, importing the modules

const express = require('express')
const path = require('path')
const app = express()
var bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

require('dotenv').config()


app.use('/', express.static(path.join(__dirname, 'client')))


app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.get('/api/properties', require('./controllers/properties_get'))
app.post('/api/properties'), require('./controllers/properties_create')
app.get('/api/countrieslist', require('./controllers/countries_get'))
app.get('/api/citieslist', require('./controllers/cities_get'))

app.listen(process.env.PORT, () => {
    console.log(`Connected to localhost ${process.env.PORT}`)
})