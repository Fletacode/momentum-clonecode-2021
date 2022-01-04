const todoform2 = document.querySelector("form.todo-form2");
const todolist2 = document.querySelector("ul.todo-list2");
const todoformininput2 = todoform2.querySelector("input.todo-forminput2");
const TODOS_KEY2 = "TodoListValues2";
let SaveTodoList2 = [];


function savedb2() {
    localStorage.setItem(TODOS_KEY2, JSON.stringify(SaveTodoList2));
}


function objectfitter2(object, li) {
    if (object.id == li.id) {
        const b = SaveTodoList2.indexOf(object);
        SaveTodoList2.splice(b, 1);
    }
}

function targetbutton2(event) {

    const li2 = event.target.parentElement;
    SaveTodoList2.forEach((item) => objectfitter2(item, li2));
    savedb2();
    li2.remove();

}


function addHTMLlist2(todoobject2) {
    const li2 = document.createElement("li");
    const span2 = document.createElement("span");
    const button2 = document.createElement("button");
    li2.appendChild(span2);
    li2.appendChild(button2);
    li2.id = todoobject2.id;
    span2.innerText = todoobject2.value;
    button2.innerText = "X";
    todolist2.appendChild(li2);
    button2.addEventListener("click", targetbutton2);

}


function addtodolist2(event) {
    event.preventDefault();
    const todovalue2 = todoformininput2.value;
    todoformininput2.value = "";
    const todoobject2 = {
        value: todovalue2,
        id: Date.now(),
    };

    SaveTodoList2.push(todoobject2);
    savedb2();
    addHTMLlist2(todoobject2);

}



todoform2.addEventListener("submit", addtodolist2);



if (localStorage.getItem(TODOS_KEY2) !== null) {
    SaveTodoList2 = localStorage.getItem(TODOS_KEY2);

    const realsavedlist2 = JSON.parse(SaveTodoList2);

    SaveTodoList2 = realsavedlist2;
    SaveTodoList2.forEach((item) => addHTMLlist2(item));
}
