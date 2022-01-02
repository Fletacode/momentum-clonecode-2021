const images = [
    "images/001.jpg",
    "images/002.jpg",
    "images/003.jpg"
]
const num = Math.floor(Math.random() * images.length);
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `${chosenImage}`;

document.body.appendChild(bgImage);