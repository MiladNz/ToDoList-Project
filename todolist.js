const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todolist");

todoButton.addEventListener("click", addTodo);

todoList.addEventListener("click", checkRemove);

function addTodo(e){
    e.preventDefault();
    //console.log(e);

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

function checkRemove(e) {
    // console.log(e.target.classList.value);
    const classList =[...e.target.classList]; //convert DomToken to array
    const item = e.target;
    if (classList[1] === "fa-check-square"){
        const todo = item.parentElement.parentElement;
        todo.classList.toggle("completed");
    } else if(classList[1] === "fa-trash-alt"){
        const todo = item.parentElement.parentElement;
        todo.remove();
    }
}