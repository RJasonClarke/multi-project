const flipBtn = document.querySelector("#flipBtn").addEventListener("click", btnClick)
const colorDiv = document.querySelector("#flip")

function btnClick(){
    if(colorDiv.style.backgroundColor === "red"){
        colorDiv.style.backgroundColor="white"
    } else {
        colorDiv.style.backgroundColor="red"
    }
}