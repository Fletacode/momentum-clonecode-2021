h2 = document.querySelector("h2.clock");
h2.innerText = "00:00:00";
function a() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    h2.innerText = (`${hour}:${minutes}:${second}`);
}

a();

setInterval(a, 1000);
