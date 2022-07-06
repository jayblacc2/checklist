const form = document.querySelector('form');
const textInput = document.querySelector('.text-input');
const todoCount = document.querySelector('.todo-count');
const todoContainer = document.querySelector('.todo-container');

// Add EventListener
form.addEventListener('submit', addTodo);

// function to Create LI element
function createTask() {
  const todoList = document.createElement('li');
  todoList.classList.add('todo-item');

  todoList.textContent = textInput.value;

  const circlePlus = document.createElement('a');
  circlePlus.className = 'far fa-trash-alt';

  todoContainer.appendChild(todoList);
  todoList.appendChild(circlePlus);

  todoList.addEventListener('click', deleteItem);
}

// function update Todos count

function todoCounts() {
  todoCount.innerText =
    document.querySelector('.todo-container').childNodes.length;
}

// Message function
function msg(message, msgClass) {
  const div = document.createElement('div');

  div.className = 'msg';

  div.classList.add('alert', msgClass);

  div.innerHTML = `<p class="msg">${message}</p>`;
  // append the dom where it will be displayed
  const container = document.querySelector('.container');
  form.after(div);
  setTimeout(() => {
    div.remove();
  }, 1000);
}

function addTodo(e) {
  let input = textInput.value;
  if (input !== '') {
    createTask();
    textInput.value = '';
    todoCounts();
    saveToLocalStorage(input);

    // Alert When task is added
    msg('Task Added! 😊', 'success');
  } else {
    msg('Enter a Task 😞!', 'error');
  }

  e.preventDefault();
}

// Function delete item from DOM

function deleteItem(e) {
  if (e.target.tagName === 'A') {
    this.remove();
    todoCounts();
    msg('Todo deleted', 'error');
  }
}

//save item to storage
function saveToLocalStorage(input) {
  let items;
  if (localStorage.getItem('items') === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem('items'));
  }
  items.push(input);
  localStorage.setItem('items', JSON.stringify(items));
}
