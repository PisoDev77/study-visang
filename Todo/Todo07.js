const $todoInput = document.getElementById('TodoInput');
const $todoList = document.getElementById('TodoList');

const saveTodoList = () => {
	const todoList = [...document.querySelectorAll('#TodoList > li > input')].map((todo) => ({
		todo: todo.value,
		completed: todo.classList.contains('checked'),
	}));
	localStorage.setItem('myTodoList', JSON.stringify(todoList));
};

const getNewTodoElements = (elementAttrs) => {
	function makeTodo(tagName, props) {
		const $element = document.createElement(tagName);
		Object.entries(props).forEach(([key, value]) => {
			$element[key] = value;
		});
		return $element;
	}

	return elementAttrs.map((elementAttr) => makeTodo(elementAttr.tagName, { ...elementAttr }));
};

const addTodo = (todoStr, completed = false) => {
	const newTodo = document.createElement('li');

	getNewTodoElements([
		{ tagName: 'input', type: 'text', disabled: true, value: todoStr, className: completed ? 'checked' : '' },
		{ tagName: 'i', className: 'custom-checkbox bx bx-checkbox bx-sm' },
		{ tagName: 'i', className: 'update-todo bx bx-pencil bx-sm' },
		{ tagName: 'i', className: 'delete-todo bx bx-trash bx-sm' },
	]).forEach((element) => {
		newTodo.appendChild(element);
	});

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
