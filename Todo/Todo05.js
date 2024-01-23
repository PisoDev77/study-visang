const $todoInput = document.getElementById('TodoInput');
const $todoList = document.getElementById('TodoList');

$todoInput.addEventListener('submit', (e) => {
	e.preventDefault();
	if (e.currentTarget.todo.value.trim() === '') return;

	const newTodo = document.createElement('li');
	const todoInput = document.createElement('input');
	const completeTodoBtn = document.createElement('i');
	const updateTodoBtn = document.createElement('i');
	const deleteTodoBtn = document.createElement('i');

	todoInput.type = 'text';
	todoInput.disabled = true;
	todoInput.value = e.currentTarget.todo.value;

	completeTodoBtn.type = 'checkbox';
	completeTodoBtn.className = 'custom-checkbox bx bx-checkbox bx-sm';

	updateTodoBtn.className = 'update-todo bx bx-pencil bx-sm';

	deleteTodoBtn.className = 'delete-todo bx bx-trash bx-sm';

	newTodo.appendChild(todoInput);
	newTodo.appendChild(completeTodoBtn);
	newTodo.appendChild(updateTodoBtn);
	newTodo.appendChild(deleteTodoBtn);

	e.currentTarget.todo.value = '';

	$todoList.appendChild(newTodo);
});

$todoList.addEventListener('click', (e) => {
	if (e.target.classList.contains('update-todo')) {
		const updatingTodo = e.target.previousElementSibling.previousElementSibling;
		updatingTodo.disabled = !updatingTodo.disabled;
		e.target.classList.toggle('bx-pencil');
		e.target.classList.toggle('bx-check');
	}

	if (e.target.classList.contains('delete-todo')) {
		e.target.parentElement.remove();
	}

	if (e.target.classList.contains('custom-checkbox')) {
		const checkBox = e.target;
		checkBox.classList.toggle('bx-checkbox');
		checkBox.classList.toggle('bx-checkbox-checked');
		checkBox.previousElementSibling.classList.toggle('checked');
	}
});
