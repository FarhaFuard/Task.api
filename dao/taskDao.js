let tasks = [
    {
        id: 1,
        title: "Learn Monolithic Architecture",
        completed: false
    },
    {
        id: 2,
        title: "Build Task API",
        completed: false
    }
];

function getAllTasks() {
    return tasks;
}

function getTaskById(id) {
    return tasks.find(task => task.id === id);
}

function createTask(task) {
    tasks.push(task);
    return task;
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
        return false;
    }

    tasks.splice(index, 1);
    return true;
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    deleteTask
};