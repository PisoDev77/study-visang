const $todoInput = document.getElementById('TodoInput');
const $todoList = document.getElementById('TodoList');

const saveTodoList = () => {
	const todoList = [...document.querySelectorAll('#TodoList > li > input')].map((todo) => ({
		todo: todo.value,
		completed: todo.classList.contains('checked'),
	}));
	localStorage.setItem('myTodoList', JSON.stringify(todoList));
};

const addTodo = (todoStr, completed = false) => {
	const newTodo = document.createElement('li');
	const todoInput = document.createElement('input');
	const completeTodoBtn = document.createElement('i');
	const updateTodoBtn = document.createElement('i');
	const deleteTodoBtn = document.createElement('i');

	todoInput.type = 'text';
	todoInput.disabled = true;
	todoInput.value = todoStr;
	todoInput.classList.toggle('checked', completed);

	completeTodoBtn.type = 'checkbox';
	completeTodoBtn.className = 'custom-checkbox bx bx-checkbox bx-sm';

	updateTodoBtn.className = 'update-todo bx bx-pencil bx-sm';

	deleteTodoBtn.className = 'delete-todo bx bx-trash bx-sm';

	newTodo.appendChild(todoInput);
	newTodo.appendChild(completeTodoBtn);
	newTodo.appendChild(updateTodoBtn);
	newTodo.appendChild(deleteTodoBtn);

	$todoList.appendChild(newTodo);
};

$todoInput.addEventListener('submit', (e) => {
	e.preventDefault();
	if (e.currentTarget.todo.value.trim() === '') return;

	addTodo(e.currentTarget.todo.value);
	e.currentTarget.todo.value = '';

	saveTodoList();
});

$todoList.addEventListener('click', (e) => {
	if (e.target.classList.contains('update-todo')) {
		const updatingTodo = e.target.previousElementSibling.previousElementSibling;
		updatingTodo.disabled = !updatingTodo.disabled;
		e.target.classList.toggle('bx-pencil');
		e.target.classList.toggle('bx-check');
		saveTodoList();
	}

	if (e.target.classList.contains('delete-todo')) {
		e.target.parentElement.remove();
		saveTodoList();
	}

	if (e.target.classList.contains('custom-checkbox')) {
		const checkBox = e.target;
		checkBox.classList.toggle('bx-checkbox');
		checkBox.classList.toggle('bx-checkbox-checked');
		checkBox.previousElementSibling.classList.toggle('checked');
		saveTodoList();
	}
});

window.addEventListener('DOMContentLoaded', () => {
	const todoList = JSON.parse(localStorage.getItem('myTodoList'));
	todoList.forEach((todo) => {
		addTodo(todo.todo, todo.completed);
	});
});
