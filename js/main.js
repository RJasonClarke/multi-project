
//Color Flipper
const flipBtn = document.querySelector("#flipBtn").addEventListener("click", btnClick)
const colorDiv = document.querySelector("#flip")
const colors = ["white", "green", "pruple", "orange", "blue", "aqua", "yellow", "brown", "red"]

function btnClick(){
    //gets a random number from tyhe getRandomNumber function and uses it to select color from colors array
    const randomNumber = getRandomNumber();
    colorDiv.style.backgroundColor = colors[randomNumber];
}

function getRandomNumber(){
    //gets a random number based on the lenght of the colors array and rounds it to a whole number
    return Math.floor(Math.random() * colors.length)
}

//Counter
let count = 0
const counter = document.querySelector("#count")
const btns = document.querySelectorAll(".btn")

btns.forEach((btn) => {
   btn.addEventListener("click", (e) => {
       const targ = e.target.classList
       if(targ.contains("decrease")){
           count--;
       } else if(targ.contains("increase")){
            count++;
       } else if(targ.contains("reset")){
           count = 0;
       }
       counter.textContent = count
   })
})

