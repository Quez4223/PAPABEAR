const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000
const DBNAME = 'papabear'

//DATABASE
mongoose.connect(`mongodb://localhost:27017/${DBNAME}`, { useNewUrlParser: true })

mongoose.connection.once('open', () => {
    console.log('connected to mongoose...')
})



// LISTENER
app.listen(PORT, () => {
    console.log('Hello Papabear')
})