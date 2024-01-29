document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form') as HTMLFormElement;
    const taskInput = document.getElementById('task-input') as HTMLInputElement;
    const taskList = document.getElementById('task-list') as HTMLUListElement;

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Crear un nuevo elemento de lista para la nueva tarea
        const newTask = document.createElement('li');
        newTask.textContent = taskInput.value;

        // Añadir botón de eliminar a la tarea
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskList.removeChild(newTask);
        };

        newTask.appendChild(deleteButton);

        // Añadir la nueva tarea a la lista
        taskList.appendChild(newTask);

        // Limpiar el input
        taskInput.value = '';
    });
});
