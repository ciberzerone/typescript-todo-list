import { TaskList } from "../src/TaskList";

describe("TaskList", () => {
    it("should add a new task", () => {
        const taskList = new TaskList();
        const task = taskList.addTask("New Task");
        expect(task).toBeDefined();
        expect(taskList.getTasks().length).toBe(1);
        expect(taskList.getTasks()[0].title).toBe("New Task");
    });

    it("should remove a task by id", () => {
        const taskList = new TaskList();
        const task = taskList.addTask("Task to Remove");
        expect(taskList.getTasks().length).toBe(1);
        taskList.removeTask(task.id);
        expect(taskList.getTasks().length).toBe(0);
    });

    it("should toggle a task's completed status", () => {
        const taskList = new TaskList();
        const task = taskList.addTask("Task to Toggle");
        expect(task.completed).toBeFalsy();
        taskList.toggleTaskCompleted(task.id);
        expect(taskList.getTasks()[0].completed).toBeTruthy();
        taskList.toggleTaskCompleted(task.id);
        expect(taskList.getTasks()[0].completed).toBeFalsy();
    });
});
