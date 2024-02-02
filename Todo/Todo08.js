const $todoInput = document.getElementById('TodoInput');
const $todoList = document.getElementById('TodoList');

const Todo = {
	getNewTodoElements: (elementAttrs) =>
		elementAttrs.map((attr) => Object.assign(document.createElement(attr.tag), attr)),

	addTodo: (todoStr, completed = false) => {
		const newTodo = document.createElement('li');
		Todo.getNewTodoElements([
			{ tag: 'input', type: 'text', disabled: true, value: todoStr, className: completed ? 'checked' : '' },
			{ tag: 'i', className: 'custom-checkbox bx bx-checkbox bx-sm' },
			{ tag: 'i', className: 'update-todo bx bx-pencil bx-sm' },
			{ tag: 'i', className: 'delete-todo bx bx-trash bx-sm' },
		]).forEach((element) => newTodo.appendChild(element));
		$todoList.appendChild(newTodo);
	},

	toggles: (ele, arr) => arr.forEach((i) => ele.classList.toggle(i)),
};

const Store = {
	saveTodoList: () => {
		const todos = [...$todoList.querySelectorAll('li > input')].map((todo) => ({
			todo: todo.value,
			completed: todo.classList.contains('checked'),
		}));
		localStorage.setItem('myTodoList', JSON.stringify(todos));
	},

	loadTodoList: () =>
		JSON.parse(localStorage.getItem('myTodoList')).forEach(({ todo, completed }) => Todo.addTodo(todo, completed)),
};

$todoInput.addEventListener('submit', (e) => {
	e.preventDefault();
	const todoValue = e.currentTarget.todo.value.trim();
	if (todoValue === '') return;

	Todo.addTodo(todoValue);
	e.currentTarget.todo.value = '';
	Store.saveTodoList();
});

$todoList.addEventListener('click', (e) => {
	const targetClassList = e.target.classList;

	if (targetClassList.contains('update-todo')) {
		const updatingTodo = e.target.previousElementSibling.previousElementSibling;
		updatingTodo.disabled = !updatingTodo.disabled;
		Todo.toggles(e.target, ['bx-pencil', 'bx-check']);
	}

	if (targetClassList.contains('delete-todo')) {
		e.target.parentElement.remove();
	}

	if (targetClassList.contains('custom-checkbox')) {
		const checkBox = e.target;
		Todo.toggles(checkBox, ['bx-checkbox', 'bx-checkbox-checked']);
		Todo.toggles(checkBox.previousElementSibling, ['checked']);
	}

	Store.saveTodoList();
});

window.addEventListener('DOMContentLoaded', Store.loadTodoList);
