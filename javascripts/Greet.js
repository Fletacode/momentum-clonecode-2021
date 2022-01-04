
const loginform = document.querySelector("form.loginform");
const loginInput = loginform.querySelector("input");
const loginButton = loginform.querySelector("button");
const link = document.querySelector("a");
const greeting = document.getElementById("greeting");
const CSS_CLASS = "hidden";

function Loginbtn(event) {   
    event.preventDefault(); 
    const username = loginInput.value;  
    localStorage.setItem("username", username);
    loginform.classList.add(CSS_CLASS);
    paintGreet(username);
}
function paintGreet(username) {
    greeting.innerText = `Hello, ${username}.`;
    greeting.classList.remove(CSS_CLASS);
}
const saveusername = localStorage.getItem("username");

if (saveusername === null) {
    loginform.classList.remove(CSS_CLASS);
    loginform.addEventListener("submit", Loginbtn);
}
else {
    paintGreet(saveusername);
    loginform.classList.add(CSS_CLASS);
}
