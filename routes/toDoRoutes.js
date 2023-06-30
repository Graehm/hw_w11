const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')

router.get('/', todoController.getAllToDo)
router.post('/create', todoController.createToDo)
router.get('/:id', todoController.getToDo)
router.put('/:id', todoController.updateToDo)
router.delete('/:id', todoController.deleteToDo)

module.exports = router
