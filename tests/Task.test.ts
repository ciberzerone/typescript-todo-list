import { Task } from "../src/Task";

describe("Task", () => {
    it("should create a task with given id and title", () => {
        const task = new Task(1, "Test Task");
        expect(task).toBeInstanceOf(Task);
        expect(task.id).toBe(1);
        expect(task.title).toBe("Test Task");
        expect(task.completed).toBeFalsy();
    });

    it("should allow toggling the task's completed status", () => {
        const task = new Task(1, "Test Task");
        expect(task.completed).toBeFalsy();
        task.toggleCompleted();
        expect(task.completed).toBeTruthy();
        task.toggleCompleted();
        expect(task.completed).toBeFalsy();
    });
});
