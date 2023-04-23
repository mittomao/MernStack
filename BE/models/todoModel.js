const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URL);

// const db = mongoose.connection;

// db.once('open', () => {
//     console.log("Connection Successful!");
// });


const todoSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Todo', todoSchema)
