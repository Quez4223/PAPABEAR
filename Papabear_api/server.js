const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const papaController = require('./controllers/papabear')


const app = express()
const PORT = 3000
const DBNAME = 'papabear'

//DATABASE
mongoose.connect(`mongodb://localhost:27017/${DBNAME}`, { useNewUrlParser: true })

mongoose.connection.once('open', () => {
    console.log('connected to mongoose...')
})

// const whitelist = ['http://localhost:3000']
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

// app.use(cors(corsOptions))

app.use(express.json())


app.use('/papabear', papaController)


app.get('/', (req, res) => {
    res.send('Hello PapaBear')
})



// LISTENER
app.listen(PORT, () => {
    console.log('Hello Papabear')
})