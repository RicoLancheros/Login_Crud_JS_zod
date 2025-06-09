import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
    const tasks = await Task.find({
        user: req.user.id
    }).populate('user')
    res.json(tasks)
}
export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id)
    if (!task)return res.status(404).json({ message: "Task not found" });
    res.status(200).json(task)
}
export const createTasks = async (req, res) => {
    const {title, description, date} = req.body;

    const task = new Task({
        title,
        description,
        date,
        user: req.user.id
    });
    const savedTask = await task.save();
    res.status(200).json(savedTask)
}
export const updateTasks = async (req, res) => {
const task = await Task.findByIdAndUpdate(req.params.id, req.body,{
    new : true
});
    if (!task)return res.status(404).json({ message: "Task not found" });
    res.status(201).json(task)
}
export const deleteTasks = async (req, res) => {
const task = await Task.findByIdAndDelete(req.params.id);
    if (!task)return res.status(404).json({ message: "Task not found" });
    return res.status(204);
}