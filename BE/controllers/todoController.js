const Todo = require('./../models/todoModel');

//GET api/todo
const getAllTodoLists = async (req, res) => {
    try {
        const listTodos = await Todo.find().sort({createdAt: -1});
        res.status(200).json(listTodos);
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

//GET api/todo/1
const getTodoListById = async (req, res) => {

    const { id } = req.params;

    try { 
        const todo = await Todo.findById(id);

        if ( !todo ) {
            return res.status(404).json({
                msg: `Can't find a todo with a similar id ${id}`
            })
        }

        res.status(200).json(todo);

    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

//POST api/todo/1
const createTodoList = async (req, res) => {

    const { title, description } = req.body;

    try {
        const todo = await Todo.create({title, description});
        res.status(200).json(todo);
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
}

//Delete api/todo/1
const deleteTodoById =  async (req, res) => {
    const { id } = req.params;

    try {
        const deleteTodo = await Todo.findByIdAndDelete(id);

        if ( !deleteTodo ) {
            return res.status(404).json({
                msg: `Can't find a todo with a similar id ${id}`
            })
        }

        res.status(200).json({
            msg: `Delete id: ${id} success!`
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        }); 
    }
}

//POST api/todo/1
const updateTodoById = async (req, res) => {
    const { id } = req.params;

    try {
        const updateTodo = await Todo.findByIdAndUpdate({
            _id: id
        }, {
            ...req.body
        });

        if ( !updateTodo ) {
            return res.status(404).json({
                msg: `Can't find a todo with a similar id ${id}`
            })
        }

        res.status(200).json({
            msg: `Update id: ${id} success!`
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        }); 
    }
}

module.exports = {
    getAllTodoLists,
    getTodoListById,
    createTodoList,
    deleteTodoById,
    updateTodoById
}