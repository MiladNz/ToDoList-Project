const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todolist");
const filterOption = document.querySelector(".filter-todos");

todoButton.addEventListener("click", addTodo);

todoList.addEventListener("click", checkRemove);

filterOption.addEventListener("click", filterTodos);

document.addEventListener("DOMContentLoaded", getLocalTodos);

function addTodo(e){
    e.preventDefault();
    //console.log(e);

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //console.log(todoDiv);
    //line 20 output:
    //<div class=​"todo">​
    //<li>​</li>
    //​<span>​<i class=​"far fa-check-square">​…​</i>​</span>​
    //<span>​<i class=​"far fa-trash-alt">​…​</i>​</span>
    //​</div>​
    //
    const newTodo =
    `<li>${todoInput.value}</li>
    <span><i class="far fa-check-square"></i></span>
    <span><i class="far fa-trash-alt"></i></span>`;
    todoDiv.innerHTML = newTodo;
    todoList.appendChild(todoDiv);  //adding new todoDiv for display it
    saveLocalTodos(todoInput.value);
    todoInput.value = "";//empty input
}

function checkRemove(e) {
    // console.log(e.target.classList.value);
    const classList =[...e.target.classList]; //convert DomToken to array
    const item = e.target; // e.target refers to the clicked span( i > trash icon) element
    //console.log(item);
    if (classList[1] === "fa-check-square"){
        const todo = item.parentElement.parentElement;
        todo.classList.toggle("completed");//adding "completed" to classList
    } else if(classList[1] === "fa-trash-alt"){
        const todo = item.parentElement.parentElement;
        removeLocalTodos(todo);
        todo.remove();
    }
}

function filterTodos(e) {
    //console.log(e.target.value);
    //console.log(todoList.childNodes);
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

function getLocalTodos(){
    let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
    savedTodos.forEach(todo =>{
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        const newTodo =
    `<li>${todo}</li>
    <span><i class="far fa-check-square"></i></span>
    <span><i class="far fa-trash-alt"></i></span>`;
        todoDiv.innerHTML = newTodo;
        todoList.appendChild(todoDiv);
    })
}

function removeLocalTodos(todo){
    // console.log(todo.children[0].innerText);

    let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
    const filteredTodos = savedTodos.filter(t => t !== todo.children[0].innerText);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
}