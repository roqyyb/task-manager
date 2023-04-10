const { createCustomError } = require('../errors/custom-error');
const async = require('../middleware/async');
const asyncWrapper = require('../middleware/async');
const { Task } = require('../models/Task');

const getAllTasks = asyncWrapper(async(req, res)=>{

    const tasks = await Task.find().sort('-_id');
    res.json({tasks});

})

const getTask = asyncWrapper( async(req, res, next)=>{
    const taskID = req.params.id;

    const task = await Task.findById(taskID)
    if(!task) return next(createCustomError(`No task with ID: ${taskID}`, 404));

    res.json({task});
})

const createTask = asyncWrapper( async(req, res)=>{
    const body = req.body;

    const task = await Task.create(body);
    res.json({task});
})

const updateTask = asyncWrapper( async(req, res)=>{
    const taskID = req.params.id;
    const body = req.body

    const task = await Task.findByIdAndUpdate(taskID, body, {new: true, runValidators: true});
    if(!task) return next(createCustomError(`No task with ID: ${taskID}`, 404));

    res.json({task});
})

const deleteTask = asyncWrapper(async(req, res)=>{
    const taskID = req.params.id

    const task = await Task.findByIdAndDelete(taskID);
    if(!task) return next(createCustomError(`No task with ID: ${taskID}`, 404));

    res.json({task});
})



module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask

}