const express = require('express')
const Papa = express.Router()
const PapaBear = require('../models/papabear')

// INDEX 
Papa.get('/', (req, res) => {
    res.send('Hello PapaBear')
})

// SEED
Papa.get('/seed', (req, res) => {
    PapaBear.create(
        [
            {
                task: 'Warm bottles',
                notes: 'Make sure not to warm bottle in microwave'
            }
        ], (error, Papa) => {
            res.send(Papa)
        }
    )
})

module.exports = Papa