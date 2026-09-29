const taskDao = require("../dao/taskDao");

function getAllTasks() {
    return taskDao.getAllTasks();
}

function getTaskById(id) {
    return taskDao.getTaskById(id);
}

function createTask(title) {

    if (!title || title.trim() === "") {
        throw new Error("Task title is required");
    }

    const tasks = taskDao.getAllTasks();

    const newTask = {
        id: tasks.length + 1,
        title: title.trim(),
        completed: false
    };

    return taskDao.createTask(newTask);
}

function deleteTask(id) {
    return taskDao.deleteTask(id);
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    deleteTask
};