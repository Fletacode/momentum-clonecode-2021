const todoform = document.querySelector("form.todo-form");
const todolist = document.querySelector("ul.todo-list");
const todoformininput = todoform.querySelector("input.todo-forminput");
const TODOS_KEY = "TodoListValues";
let SaveTodoList = [];


function savedb() {
    localStorage.clear();
    localStorage.setItem(TODOS_KEY, JSON.stringify(SaveTodoList));
    
}


function objectfitter(object, li) {
    if (object.id == li.id) {
        const a = SaveTodoList.indexOf(object);
        SaveTodoList.splice(a, 1);
        console.log(SaveTodoList);
     }
   
}

function targetbutton(event) {
    
    const li = event.target.parentElement;    
    SaveTodoList.forEach((item) => objectfitter(item, li));
    savedb();
    li.remove();
    
}


function addHTMLlist(todoobject) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    li.id = todoobject.id;
    
    span.innerText = todoobject.value;
    button.innerText = "X";
    todolist.appendChild(li);
    button.addEventListener("click", targetbutton);
    
}


function addtodolist(event) {
    event.preventDefault();
    const todovalue = todoformininput.value;
    todoformininput.value = "";
    const todoobject = {
        value: todovalue,
        id:Date.now(),
    };
    
    SaveTodoList.push(todoobject);
    savedb();
    addHTMLlist(todoobject);
      
}



todoform.addEventListener("submit", addtodolist);



if (localStorage.getItem(TODOS_KEY) !== null) {
    SaveTodoList = localStorage.getItem(TODOS_KEY);
    
    const realsavedlist = JSON.parse(SaveTodoList);

    SaveTodoList = realsavedlist;
    SaveTodoList.forEach((item) => addHTMLlist(item));
}
