const $todos = document.querySelector('.todos');
const $todoInput = document.querySelector('#todoInput');

$todoInput.addEventListener('keydown', (e) => {
	if (e.key !== 'Enter') return;
	document.createElement('li');
	const newTodo = document.createElement('li');
	newTodo.textContent = e.target.value;
	e.target.value = '';
	$todos.appendChild(newTodo);
});
