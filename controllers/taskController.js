const taskService = require("../services/taskService");

function getTasks(req, res) {
    const tasks = taskService.getAllTasks();

    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(tasks, null, 2));
}

function getTask(req, res) {
    const id = parseInt(req.params.id);

    const task = taskService.getTaskById(id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.json(task);
}

function createTask(req, res) {
    try {
        const { title } = req.body;

        const task = taskService.createTask(title);

        res.status(201).json(task);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

function deleteTask(req, res) {
    const id = parseInt(req.params.id);

    const deleted = taskService.deleteTask(id);

    if (!deleted) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.json({
        message: "Task deleted successfully"
    });
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    deleteTask
};