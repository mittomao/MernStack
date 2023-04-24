const express = require('express');
const {
    getAllTodoLists,
    getTodoListById,
    createTodoList,
    deleteTodoById,
    updateTodoById
} = require('./../controllers/todoController')

const router = express.Router();

//GET api/todo
router.get('/', getAllTodoLists);

//GET api/todo/1
router.get('/:id', getTodoListById);

//POST api/todo/1
router.post('/', createTodoList);

//Delete api/todo/1
router.delete('/:id', deleteTodoById);

//POST api/todo/1
router.put('/:id', updateTodoById);

module.exports = router