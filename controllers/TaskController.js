import TasksModel from "../models/Tasks.js";

export const create = async (req, res) => {
    try {
        const doc = new TasksModel({
            name: req.body.name,
            tasks: req.body.tasks,
            date: req.body.date,
            deadline: req.body.deadline,
        })
        const todo = await doc.save();
        console.log(todo);
        res.json(todo);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Todo not create" })
    }
}
export const getTasks = async (req, res) => {
    try {
        const todos = await TasksModel.find()
            .sort({ createdAt: 'desc' })
            .exec();
        const newTasks = todos
            .filter(task => !task.overdue && task.tasks)
            .filter(task => task.tasks.some(task => task.checked === false));
        res.json(newTasks);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Todo not find" })
    }
}
export const getTasksСompleted = async (req, res) => {
    try {
        const todos = await TasksModel.find()
            .sort({ createdAt: 'desc' })
            .exec();
        const complitedTasks = todos
            .filter(task => !task.overdue && task.tasks)
            .filter(task => task.tasks.every(task => task.checked === true));
        res.json(complitedTasks);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Todo not find" })
    }
}