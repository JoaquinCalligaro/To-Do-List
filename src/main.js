const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', function () {
  const text = input.value.trim();
  const btn = document.createElement('button');
  btn.classList.add(
    'bg-gray-400',
    'text-xs',
    'text-black',
    'rounded-sm',
    'px-2',
    'py-1',
    'ml-3',
    'hover:bg-red-700',
    'transition',
    'duration-400',
    'animate-zoom-in'
  );
  const li = document.createElement('li');

  const textNode = document.createTextNode(text);
  btn.textContent = 'X';
  btn.addEventListener('click', function () {
    const li = this.parentElement;
    li.classList.remove('animate-contract-vertically');
    setTimeout(() => {
      li.remove();
    }, 250);
  });
  if (text.length > 0) {
    li.appendChild(textNode);
    li.appendChild(btn);
    taskList.appendChild(li);
    input.value = '';
    setTimeout(() => {
      li.classList.remove('opacity-0', 'translate-y-4');
    }, 10);
  } else {
    alert('Por favor ingrese un texto');
  }
});

removeBtn.addEventListener('click', function () {
  if (confirm('Esta seguro que desea eliminar todas las tareas?')) {
    const allTasks = document.querySelectorAll('#taskList li');
    allTasks.forEach((li) => {
      li.classList.add('animate-contract-vertically');
    });

    // Prueba con diferentes tiempos
    setTimeout(() => {
      taskList.innerHTML = '';
    }, 300); // Prueba con menos tiempo
  }
});
