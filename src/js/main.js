import { tasks, saveTasks, addTaskToDOM } from './task.js';

const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
const taskList = document.getElementById('taskList');

tasks.forEach((task) => {
  addTaskToDOM(task, taskList);
});

addBtn.addEventListener('click', function () {
  const newTask = input.value.trim();

  if (newTask.length > 0) {
    tasks.push(newTask);
    saveTasks();
    addTaskToDOM(newTask, taskList);
    input.value = '';
  } else {
    alert('Por favor ingrese un texto');
  }
});

removeBtn.addEventListener('click', function () {
  if (confirm('¿Estás seguro que deseas eliminar todas las tareas?')) {
    const allTasks = document.querySelectorAll('#taskList li');

    allTasks.forEach((li) => {
      li.classList.add('animate-contract-vertically');
    });

    setTimeout(() => {
      taskList.innerHTML = '';
      localStorage.removeItem('tasks');
    }, 300);
  }
});
