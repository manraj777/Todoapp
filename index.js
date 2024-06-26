
// write basic express boilerplate code
// with express.json() middleware
const express = require("expess");

// import createTodo and updateTodo

const app = express();
const {createTodo} = require("./types")
const {updateTodo} = require("./types")
app.use(express.json());

app.post("/todo" , function(req, res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "you have sent wrong inputs"
        })
        return;
    }
    // put it in mongodb
})
app.get("/todo" , function(req, res){

})
app.put("/complete" , function(req, res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "you have sent wrong inputs"
        })
        return;
    }
})