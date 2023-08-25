import { getTasks, addTask, removeTask, updateTask } from "./tasks.js";

getTasks().forEach((task) => {
    const {id, nome, completed} = task
    console.log(id, nome, completed)
})

addTask("Estudar React Native")
removeTask(1)
updateTask(2, {nome:"Estudar JS", completed: true})

getTasks().forEach((task) => {
    const {id, nome, completed} = task
    console.log(id, nome, completed)
})