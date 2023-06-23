const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    name: { type: String, required: true, default: "unknown" },
    author: String,
    song: String
})

module.exports = mongoose.model('Song', songSchema)