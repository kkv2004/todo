document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            taskSpan.classList.add('task');

            const actionsDiv = document.createElement('div');
            actionsDiv.classList.add('actions');

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.classList.add('edit');
            editBtn.addEventListener('click', () => editTask(taskItem, taskSpan));

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete');
            deleteBtn.addEventListener('click', () => deleteTask(taskItem));

            actionsDiv.appendChild(editBtn);
            actionsDiv.appendChild(deleteBtn);

            taskItem.appendChild(taskSpan);
            taskItem.appendChild(actionsDiv);

            taskList.appendChild(taskItem);

            taskInput.value = '';
            taskInput.focus();
        }
    }

    function editTask(taskItem, taskSpan) {
        const newTaskText = prompt('Edit your task', taskSpan.textContent);
        if (newTaskText !== null) {
            taskSpan.textConten = newTaskText;
        }
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }
});