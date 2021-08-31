const Task = require('../../../db/models/task/index')

module.exports.getAllTasks = async (req, res) => {
    Task.find().then(result => {
        res.send({data: result})
    }).catch(err=> res.send(err))
};

module.exports.createNewTask = (req, res) => {
    const task = new Task(req.body)
    task.save().then(result => {
        res.send({data: result})
    }).catch(err=> res.send(err))
};

module.exports.changeTaskInfo = (req, res) => {
    Task.updateOne({_id: req.body._id}, req.body).then(result => {
        Task.find({_id: req.body._id}).then(result1 => {
            res.send({data: result1})
        })
    }).catch(err=> res.send(err))
};

module.exports.deleteTask = (req, res) => {
    Task.deleteOne({_id: req.body._id}).then(result => {
        Task.find({_id: req.body._id}).then(result1 => {
            res.send({data: "ID: " + req.body._id + " deleted"})
        })
    }).catch(err=> res.send(err))
};