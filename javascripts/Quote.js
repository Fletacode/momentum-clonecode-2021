const quotes = [
    {
        quoto: "No great man ever complains of want of opportunity.",
        author: "kim"
    },
    {
        quoto: "Do not accustom yourself to use big words for little matters.",
        author: "kim"
    },
    {
        quoto: "A day without laughter is a day wasted.",
        author: "kim"
    },
    {
        quoto: "Patterning your life around other's opinions is nothing more than slavery.",
        author: "kim"
    },
    {
        quoto: " love what you have.",
        author: "kim"
    },
    {
        quoto: "Life is not fair, get used to it.",
        author: "kim"
    },
    {
        quoto: "Only I can change my life, No one can do it for me.",
        author: "kim"
    }  
]

const span1 = document.querySelector("div.quote span:first-child");
const span2 = document.querySelector("div.quote span:last-child");
const random = Math.floor(Math.random() * quotes.length);

const todayquote = quotes[random];


span1.innerText = todayquote.quoto;
span2.innerText = todayquote.author;


