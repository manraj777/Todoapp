/*
    Todo {
    title: string,
    description: string,
    completed: boolean
    }

*/

const mongoose = require("mongoose")
// mongodb url handly
 
mongoose.connect("mongodb+srv://manraj:Manraj%40777@cluster0.9mtiogx.mongodb.net/Todoapp")
const todoschema = mongoose.Schema({
    title: String, 
    description: String,
    complete: Boolean
})
const todo = mongoose.model('todos', todoschema);
module.exports = {
    todo
}