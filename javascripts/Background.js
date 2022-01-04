const images = [
    "images/001.jpg",
    "images/002.jpg",
    "images/003.jpg",
    "images/004.jpg",
    "images/005.jpg",
    "images/006.jpg"
]
const num = Math.floor(Math.random() * images.length);
const chosenImage = images[num];
const body = document.getElementsByTagName('body');
body[0].background = `${chosenImage}`;
