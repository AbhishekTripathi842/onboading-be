const Todo = require("../Model/Todo");

// get api

const getTodos = (req, res) => {
    Todo.find().then((todo) => {
        res.send(todo);
    }).catch((err) => {
        res.send(err);
        console.log("error is here now :-", err)
    })

};

// post api

const createTodo = (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
    });

    todo.save().then(() => {
        res.send(todo);
    }).catch((err) => {
        console.log(err);
    })
};

// update api

const updateTodo = (req, res) => {
    Todo.findOneAndUpdate(
        { _id: req.params.todoID },
        {
            $set: {
                title: req.body.title,
                description: req.body.description,
                completed: req.body.completed,
            },
        },
        { new: true }
    ).then((Todo) => {
        res.send(Todo);
    }).catch((err) => {
        res.send(err);
        console.log("error is here now :-", err)
    })

};

// delete api

const deleteTodo = (req, res) => {
    Todo.deleteOne({ _id: req.params.todoID })
        .then(() => res.json({ message: "Todo Deleted" }))
        .catch((err) => res.send(err));
};


module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
};
