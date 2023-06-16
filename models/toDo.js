require('dotenv').config()
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    title: {type: String, require: true}, 
    description: String, 
    completed: {type: Boolean, default: false},
    created_at: {type: Date, default: Date.now}
})

const ToDo = mongoose.model('toDo', toDoSchema)
module.exports = ToDo