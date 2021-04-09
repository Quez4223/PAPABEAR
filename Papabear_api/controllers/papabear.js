const express = require('express')
const Papa = express.Router()

// INDEX 
Papa.get('/', (req, res) => {
    res.send('Hello PapaBear')
})

module.exports = Papa