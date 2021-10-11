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
function msg(message) {
  const div = document.createElement('div');

  div.className += 'alert error';

  div.innerHTML = `<p>${message}</p>`;
  // append the dom where it will be displayed
  const container = document.querySelector('.container');
  form.before(div);
  setTimeout(() => {
    div.remove();
  }, 2000);
}

function addTodo(e) {
  if (textInput.value !== '') {
    createTask();
    textInput.value = '';
    todoCounts();

    // Alert When task is addeed

    msg('Task Added!');
  } else {
    setTimeout(function (message) {
      msg('Enter a Task!');
    }, 3000);
  }

  e.preventDefault();
}

// Function delete item from DOM

function deleteItem(e) {
  if (e.target.tagName === 'A') {
    this.remove();
    console.log(e.target);
    todoCounts();
    msg('Todo deleted');
  }
}

// todoContainer.addEventListener('click', function deleteItem(e) {
//   if (e.target.className === 'todo-item') {
//     e.target.remove();
//     console.log(e.target);
//   }
// });
