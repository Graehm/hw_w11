require('dotenv').config()
const Todo = require('../models/todo')

exports.getAllTodo = async (req, res) => {
    try {
        const foundTodos = await Todo.find({})
        res.json('todos/Index', {
            todos: foundTodos
        })
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.createTodo = async (req, res) => {
    try {
        // const {title, description} = req.body
        const todo = new Todo(req.body)
        await todo.save()
        res.json(req.body)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.getTodo = async (req, res) => {
    try {
        const foundTodo = await Todo.findOne({_id: req.body.id})
        res.json(todo/Show, {
            todo: foundTodo
        })
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.updateTodo = async (req, res) => {
    try {
        const foundTodo = await Todo.findOne({'_id': req.params.id})
        if(!todo){
            res.status(400).json({message: error.message})
        }else {
            const properties = Object.keys(req.body)
            properties.forEach((property) => (todo[property] =
            re.body[property]))
            await todo.sace()
            res.json(todo)
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findOneAndDelete({'_id': req.params.id})
        if(!deleteTdod){
            res.status(400).json({message: error.message})
        }else{
            res.json(deleteTodo)
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


