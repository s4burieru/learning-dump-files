const todoList = [];

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);

  inputElement.value = "";
}

const todoList2 = ["make dinner", "wash dishes"];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList2.length; i++) {
    const todo = todoList2[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);
  document.querySelector(".js-list-items").innerHTML = todoListHTML;
}

function addTodo2() {
  const inputElement2 = document.querySelector(".js-name-input2");
  const name2 = inputElement2.value;

  todoList2.push(name2);
  console.log(todoList2);

  inputElement2.value = "";

  renderTodoList();
}
