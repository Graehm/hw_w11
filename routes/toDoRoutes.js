const express = require('express')
const router = express.Router()
const todoController = require('../controller/todoController')

router.get('/', todoController.getAllToDo)
router.post('/', todoController.createToDo)
router.get('/:id', todoController.getToDo)
router.put('/:id', todoController.updateToDo)
router.delete('/:id', todoController.deleteToDo)

module.exports = router
