const mongoose = require('mongoose')

const {Schema} = mongoose

const taskScheme = new Schema({
    name: String,
    cost: Number,
    date: String,
})

module.exports = Task = mongoose.model("tasks", taskScheme)
