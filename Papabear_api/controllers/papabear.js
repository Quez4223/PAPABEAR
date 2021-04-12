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

// UPDATE
Papa.put('/:id', (req, res) => {
    PapaBear.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTask) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }

        res.status(200).json(updatedTask)
    })
})


// DELETE
Papa.delete('/:id', (req, res) => {
    PapaBear.findByIdAndRemove(req.params.id, (err, deletedTask) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }

        res.status(200).json(deletedTask)
    })
})

module.exports = Papa