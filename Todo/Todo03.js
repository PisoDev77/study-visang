const $todoInput = document.getElementById('TodoInput');
const $todoList = document.getElementById('TodoList');

$todoInput.addEventListener('submit', (e) => {
	e.preventDefault();
	if (e.currentTarget.todo.value.trim() === '') return;

	const newTodo = document.createElement('li');
	const todoInput = document.createElement('input');
	const updateTodoBtn = document.createElement('i');

	todoInput.type = 'text';
	todoInput.disabled = true;
	todoInput.value = e.currentTarget.todo.value;

	updateTodoBtn.className = 'update-todo bx bx-pencil bx-sm';

	newTodo.appendChild(todoInput);
	newTodo.appendChild(updateTodoBtn);

	e.currentTarget.todo.value = '';

	$todoList.appendChild(newTodo);
});

$todoList.addEventListener('click', (e) => {
	if (e.target.classList.contains('update-todo')) {
		const updatingTodo = e.target.previousElementSibling;
		updatingTodo.disabled = !updatingTodo.disabled;
		e.target.classList.toggle('bx-pencil');
		e.target.classList.toggle('bx-check');
	}
});
