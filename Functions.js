//Created 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Noah Moon
const Screen = document.getElementById("screen");

function printToScreen(text){
    Screen.innerHTML = text;
}

function memoryAdd(){
    memory += parseInt(Screen.innerHTML);
    printToScreen(memory);
}

function memorySub(){
    memory -= parseInt(Screen.innerHTML);
    printToScreen(memory);
}

function memoryReset(){
    memory = 0;
    printToScreen(memory);
}

function num1(){
    printToScreen("1");
}

function num2(){
    printToScreen("2");
}

var memory = 0;

//num buttons
console.log(document.getElementById("numbers"))
var numButtons = document.getElementById("numbers");
numButtons[0].addEventListener("click", num1) //num 1
numButtons[1].addEventListener("click", num1) //num 2

//memory buttons
var memoryButtons = document.getElementById("memory").mem
memoryButtons[0].addEventListener("click", memoryAdd) //memory add
memoryButtons[1].addEventListener("click", memorySub) //memory subtract
memoryButtons[2].addEventListener("click", memoryReset) //memory reset

printToScreen("2")
