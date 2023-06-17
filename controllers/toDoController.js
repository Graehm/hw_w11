require('dotenv').config()
const Todo = require('../models/todo')

exports.getAllToDo = async (req, res) => {
    try {
        const foundTodos = await Todo.find({})
        res.json('todos/Index', {
            todos: foundTodos
        })
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.createToDo = async (req, res) => {
    try {
        // const {title, description} = req.body
        const todo = new Todo(req.body)
        await todo.save()
        res.json(req.body)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.getToDo = async (req, res) => {
    try {
        const foundTodo = await Todo.findOne({_id: req.body.id})
        res.json(todo/Show, {
            todo: foundTodo
        })
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.updateToDo = async (req, res) => {
    try {
        const foundTodo = await Todo.findOne({'_id': req.params.id})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.deleteToDo = async (req, res) => {
    try {
        await Todo.findOneAndDelete({'_id': req.params.id})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


