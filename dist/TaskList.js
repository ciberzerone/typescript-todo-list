"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskList = void 0;
const Task_1 = require("./Task");
class TaskList {
    constructor() {
        this.tasks = [];
    }
    addTask(title) {
        const newId = this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id)) + 1 : 1;
        const newTask = new Task_1.Task(newId, title);
        this.tasks.push(newTask);
        return newTask;
    }
    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    toggleTaskCompleted(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.toggleCompleted();
        }
    }
    getTasks() {
        return this.tasks;
    }
    showTasks() {
        this.tasks.forEach(task => {
            console.log(`${task.id}: ${task.title} [${task.completed ? 'Completed' : 'Not Completed'}]`);
        });
    }
}
exports.TaskList = TaskList;
