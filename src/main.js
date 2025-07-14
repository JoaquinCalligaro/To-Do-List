const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');

const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', function () {
  const text = input.value.trim();
  const li = document.createElement('li');
  li.textContent = text;
  if (text.length > 0) {
    taskList.appendChild(li);
  } else {
    alert('Por favor ingrese un texto');
  }
});
