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

// CREATE
Papa.post('/', (req, res) => {
    PapaBear.create(req.body, (err, createdTask) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }

        res.status(200).send(createdTask)
    })
    console.log(req.body)
})

module.exports = Papa