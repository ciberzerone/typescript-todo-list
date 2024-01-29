import { Task } from "./Task";

export class TaskList {
    private tasks: Task[] = [];

    addTask(title: string): Task {
        const newId = this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id)) + 1 : 1;
        const newTask = new Task(newId, title);
        this.tasks.push(newTask);
        return newTask;
    }

    removeTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    toggleTaskCompleted(id: number): void {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.toggleCompleted();
        }
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    showTasks(): void {
        this.tasks.forEach(task => {
            console.log(`${task.id}: ${task.title} [${task.completed ? 'Completed' : 'Not Completed'}]`);
        });
    }
}
