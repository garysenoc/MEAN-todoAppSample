const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todo = new Schema({
  task_name: {
    type: String
  },
  task_description: {
    type: String
  },
  priority: {
    type: String
  },
  status: {
    type: String
  },
}, {
  collection: 'todo'
})

module.exports = mongoose.model('Todo', Todo)
