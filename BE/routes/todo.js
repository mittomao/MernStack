const express = require('express');
const Todo = require('./../models/todoModel');

const router = express.Router();

//GET api/todo
router.get('/', async (req, res) => {
    try {
        const listTodos = await Todo.find();
        res.status(200).json(listTodos);
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
});

//GET api/todo/1
router.get('/:id', async (req, res) => {
    res.json({
        msg: 'Get a single todo'
    });
});

//POST api/todo/1
router.post('/', async (req, res) => {
    const { title, description } = req.body;

    try {
        const todo = await Todo.create({title, description});
        res.status(200).json(todo);
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
});

//Delete api/todo/1
router.delete('/:id', (req, res) => {
    res.json({
        msg: 'DELETE todo'
    });
});

//POST api/todo/1
router.put('/:id', (req, res) => {
    res.json({
        msg: 'UPDATE todo'
    });
});

module.exports = router