const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  email :{
      type: String
  },
  date: {
    type: Date,
    default: new Date(Date.now()),
  }
});

const Todo = mongoose.model("TODO", todoSchema);
module.exports = Todo;
