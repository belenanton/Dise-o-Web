document.getElementById('addTaskButton').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        let taskList = document.getElementById('taskList');

        let li = document.createElement('li');
        li.textContent = taskText;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        
        taskInput.value = '';
    }
});
