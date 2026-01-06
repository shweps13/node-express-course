const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    const tasks = await Task.find({});
    if (tasks.length >= 0) {
        res.status(201).json({ tasks })
    } else {
        res.status(404).json({ error: `No tasks founded` })
    }
}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id)
    if (task) {
        res.status(201).json({ task })
    } else {
        res.status(404).json({ error: `No ${req.params.id} task founded` })
    }
}
const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (task) {
            res.status(201).json({ task })
        } else {
            res.status(404).json({ error: `No ${req.params.id} task founded` })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const deleteTask = async (req, res) => {
    const task = await Task.deleteOne({ _id: req.params.id })
    if (task) {
        res.status(200).json({ task })
    } else {
        res.status(404).json({ error: `No ${req.params.id} task founded` })
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}

