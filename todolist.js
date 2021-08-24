const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todolist");
const filterOption = document.querySelector(".filter-todos");

todoButton.addEventListener("click", addTodo);

todoList.addEventListener("click", checkRemove);

filterOption.addEventListener("click", filterTodos);

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
    saveLocalTodos(todoInput.value);
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

function filterTodos(e) {
    //console.log(e.target.value);
    console.log(todoList.childNodes);
    const todos  = [...todoList.childNodes];
    //console.log(todos);
    todos.forEach((todo) => {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalTodos(todo){
    let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
    savedTodos.push(todo);
    localStorage.setItem("todos",JSON.stringify(savedTodos)); 
}