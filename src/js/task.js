export let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

export function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function addTaskToDOM(task, taskList) {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  const textNode = document.createTextNode(task);

  // Botón eliminar individual
  btn.textContent = 'X';
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

  btn.addEventListener('click', function () {
    const li = this.parentElement;
    li.classList.add('animate-contract-vertically');
    setTimeout(() => {
      li.remove();

      // Actualizar tasks y localStorage
      tasks = tasks.filter((t) => t !== task);
      saveTasks();
    }, 250);
  });

  li.appendChild(textNode);
  li.appendChild(btn);
  taskList.appendChild(li);
}
