const $todoInput = document.getElementById('TodoInput');
const $todoList = document.getElementById('TodoList');

$todoInput.addEventListener('submit', (e) => {
	e.preventDefault();
	if (e.target.value.trim() === '') return;

	const newTodo = document.createElement('li');
	newTodo.textContent = e.currentTarget.todo.value;
	e.currentTarget.todo.value = '';
	$todoList.appendChild(newTodo);
});
