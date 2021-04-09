const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000


// LISTENER
app.listen(PORT, () => {
    console.log('Hello Papabear')
})