const express = require('express');
const app = express();

const todoRoute = express.Router();
const Todo = require('../model/Todo');

// Add Todo
todoRoute.route('/add-todo').post((req, res, next) => {
    Todo.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all Todo
todoRoute.route('/').get((req, res) => {
    Todo.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Get not started list Todo
todoRoute.route('/not-started').get((req, res) => {
  Todo.find({'status': 'Not Started'},(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Get completed list Todo
todoRoute.route('/completed').get((req, res) => {
  Todo.find({'status': 'Completed'},(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get in progress list Todo
todoRoute.route('/in-progress').get((req, res) => {
  Todo.find({'status': 'In Progress'},(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Todo
todoRoute.route('/todo/:id').get((req, res) => {
    Todo.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Todo
todoRoute.route('/update-todo/:id').put((req, res, next) => {
    Todo.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Book updated successfully!')
    }
  })
})

// Delete Todo
todoRoute.route('/delete-todo/:id').delete((req, res, next) => {
    Todo.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = todoRoute;
