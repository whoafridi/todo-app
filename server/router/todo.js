const experss = require("express");
const router = experss.Router();
const Todo = require("../model/todoSchema");

// Add todo
router.post("/addtodo", async (req, res) => {
  const {title, description, email} = req.body;
  try {
    const newTodo = new Todo({
        title, description, email
    });
    await newTodo.save();
    res.status(201).send("New todo added");
  } catch (error) {
    res.json({ message: error });
  }
});
//Get all todos
router.get("/getalltodos", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.send(todos);
  } catch (error) {
    res.json({ message: error });
  }
});
// get single todo
router.get("/gettodobyid/:todoId", async (req, res) => {
  const todoId = req.params.todoId
  console.log(req.params.todoId)
  try {
    const todo = await Todo.findOne({ _id: todoId });
    res.send(todo);
  } catch (error) {
    res.json({ message: error });
  }
});
// get todo by email
router.get("/gettodobymail/:email", async (req, res) => {
    console.log(req.params.email)
    try {
      const todo = await Todo.findOne({ email: req.params.email });
      res.send(todo);
    } catch (error) {
      res.json({ message: error });
    }
  });
// update todo
router.put("/updatetodo/:id", async (req, res) => {
  const updatedTodo = req.body;
  console.log(req.body, req.params.id);
  try {
    const result = await Todo.findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            title: updatedTodo.title , description:updatedTodo.description
          },
        },
        {
          new: true,
          useFindAndModify: false,
        })
    res.status(200).send("Todo Update Success")
    console.log(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
// delete todo
router.delete("/deletetodo/:todoId", async (req, res) => {
  const todoId = req.params.todoId;
  try {
    await Todo.findOneAndDelete({ _id: todoId });
    res.status(200).send("todo deleted");
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

module.exports = router;
