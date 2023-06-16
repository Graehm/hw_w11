const express = require('express')
const router = express.Router()
const toDoController = require('../controllers/toDoController')

router.get('/todos', toDoController.getToDo)
router.post('/todo', toDoController.createToDo)
router.get('/todos/:id', toDoController.getToDo)
router.put('/todos/:id', toDoController.updateToDo)
router.delete('/todos/:id', toDoController.deleteToDo)

module.exports = router
