require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todo');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.params, req.method);
    next();
}); 

//routes
app.use('/api/todo', todoRoutes);

//connect
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connection Mongodb & Listening on port', process.env.PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    });