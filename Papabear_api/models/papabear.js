const mongoose = require('mongoose')

const papaBearSchema = mongoose.Schema({
    task: { type: String, required: true }, 
    notes: { type: String }
})

module.exports = mongoose.model('PapaBear', papaBearSchema)