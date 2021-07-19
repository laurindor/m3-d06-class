// routes/project.routes.js
 
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Task = require('../models/Task.model')

router.post('/', (req, res)=>{
    const { project, title, description } = req.body

    Task.create({
        project,
        title,
        description
    })
    .then( createdTask => res.json(createdTask))
    .catch(err=>res.json(err))
})

router.get('/', (req, res)=>{
    Task.find()
    .populate('project')
    .then( allTheTasks => res.json(allTheTasks))
    .catch(err=>res.json(err))
})

router.get('/:taskId', (req, res) => {
    const { taskId } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(taskId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    Task.findById(taskId)
      .populate('project')
      .then(task => res.json(task))
      .catch(err => res.json(err));
});

module.exports = router
// the same as 'export defualt' that we have used in frontend code