function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
        var taskList = document.getElementById('taskList');

       
        var taskItem = createTaskItem(taskText, true); 
        taskList.appendChild(taskItem);
        taskInput.value = '';
        taskList.scrollTop = taskList.scrollHeight; 
    }
}

function createTaskItem(taskText, isPending) {
    var taskItem = document.createElement('div');
    taskItem.className = isPending ? 'task' : 'completed-task';

    if (isPending) {
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button" onclick="deleteTask(this.parentNode)">✕</button>
        `;
    } else {
        taskItem.innerHTML = `
            <button class="delete-button" onclick="deleteTask(this.parentNode)">✕</button>
        `;
    }

    return taskItem;
}

function deleteTask(taskItem) {
    if (taskItem.parentNode.id === 'taskList') {
        taskItem.remove(); 
    } else if (taskItem.parentNode.id === 'completedList') {
        taskItem.remove(); 
    }
}
