const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todolist");
todoButton.addEventListener("click", addTodo);

function addTodo(e){
    e.preventDefault();
    console.log(e);

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo =
    `<li>${todoInput.value}</li>
    <span><i class="far fa-check-square"></i></span>
    <span><i class="far fa-trash-alt"></i></span>`;
    todoDiv.innerHTML = newTodo;
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}