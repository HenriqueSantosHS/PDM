let tasks = [
    {
        id: 1,
        nome: "Estudar Flutter",
        completed: true
    },

    {
        id: 2,
        nome: "Lavar o carro",
        completed: false
    },

    {
        id: 3,
        nome: "resolver issues pendentes",
        completed: false
    }
];

const getTasks = () => tasks;

const addTask = (taskName) => {
    const newTask = {
        id: tasks.length + 1,
        nome: taskName,
        completed: false
    }
    tasks.push(newTask);
}

const removeTask = (taskId) => {
    const index = tasks.findIndex((task) => task.id ===taskId)
    tasks.splice(index, 1)
}

const updateTask = (taskId, taskProps) =>  {
    const index = tasks.findIndex((task) => task.id ===taskId)
    tasks[index] = {id: taskId, ...taskProps}
}

export {getTasks, addTask, removeTask, updateTask}