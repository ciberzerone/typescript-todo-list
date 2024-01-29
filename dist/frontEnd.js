"use strict";
document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const newTask = document.createElement('li');
        newTask.textContent = taskInput.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            taskList.removeChild(newTask);
        };
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
        taskInput.value = '';
    });
});
