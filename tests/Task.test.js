"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = require("../src/Task");
describe("Task", () => {
    it("should create a task with given id and title", () => {
        const task = new Task_1.Task(1, "Test Task");
        expect(task).toBeInstanceOf(Task_1.Task);
        expect(task.id).toBe(1);
        expect(task.title).toBe("Test Task");
        expect(task.completed).toBeFalsy();
    });
    it("should allow toggling the task's completed status", () => {
        const task = new Task_1.Task(1, "Test Task");
        expect(task.completed).toBeFalsy();
        task.toggleCompleted();
        expect(task.completed).toBeTruthy();
        task.toggleCompleted();
        expect(task.completed).toBeFalsy();
    });
});
