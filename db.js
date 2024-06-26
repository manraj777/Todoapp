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
    title: string, 
    description: string,
    complete: boolean
})
const todo = mongooes.model('todos', todoschema);
module.exports = {
    todo
}