
// write basic express boilerplate code
// with express.json() middleware
const express = require('express');
// import createTodo and updateTodo

const app = express();
const {createTodo} = require("./types");
const {updateTodo} = require("./types");
const { todo } = require("./db");
app.use(express.json());

app.post('/todo' , async function(req, res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "you have sent wrong inputs",
        })
        return;
    }
    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})
app.get('/todos' , async function(req, res){
    const todos = await  todo.find({})
    res.json({
        todos
    })
})
app.put('/complete' , async function(req, res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "you have sent wrong inputs"
        })
        return;
    }
    await todo.update({
        _id : req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})
app.listen(3000);