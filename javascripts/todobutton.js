const todo_button = document.querySelector("div.todo-button");
const right_box = document.querySelector("div.todo-rightbox");


function fitter(rightbox) {
    console.log(rightbox);
    if (rightbox == "hidden") {
        right_box.classList.remove("hidden");
    }
    else {
        right_box.classList.add("hidden");
    }
}

function rightbox_hidden(button) {
    right_box.classList.forEach((item) => fitter(item));
}
todo_button.addEventListener("click", rightbox_hidden);