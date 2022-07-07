//Created 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Jake McCann
const Screen = document.getElementById("screen");

//Created 7/7/2022 by Jake McCann
//Evaluates equals button functionality
function equate(){
    let rightOperand = parseInt(Screen.innerHTML)
    let result = Operation(LeftOperand, rightOperand)
    Screen.innerHTML = result;
}

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

function num1(value){
    printToScreen(Screen.innerHTML + "1");
}

function num2(){
    printToScreen(Screen.innerHTML + "2");
}
function num3(){
    printToScreen(Screen.innerHTML + "3");
}
function num4(){
    printToScreen(Screen.innerHTML + "4");
}
function num5(){
    printToScreen(Screen.innerHTML + "5");
}
function num6(){
    printToScreen(Screen.innerHTML + "6");
}
function num7(){
    printToScreen(Screen.innerHTML + "7");
}
function num8(){
    printToScreen(Screen.innerHTML + "8");
}
function num9(){
    printToScreen(Screen.innerHTML + "9");
}
function num0(){
    printToScreen(Screen.innerHTML + "0");
}
function numNegative(){
        printToScreen((parseInt(Screen.innerHTML) * -1).toString());
}
function clear(){
    printToScreen("");
}
var memory = 0;
let Operation
let LeftOperand

//operator buttons
let operations = document.getElementById("operations")
operations[4].addEventListener("click", equate)

//num buttons
console.log(document.getElementById("numbers"))
let numButtons = document.getElementById("numbers");
console.log(numButtons)
numButtons[0].addEventListener("click", num1) //num 1
numButtons[1].addEventListener("click", num2) //num 2
numButtons[2].addEventListener("click", num3) //num 3
numButtons[3].addEventListener("click", num4) //num 4
numButtons[4].addEventListener("click", num5) //num 5
numButtons[5].addEventListener("click", num6) //num 6
numButtons[6].addEventListener("click", num7) //num 7
numButtons[7].addEventListener("click", num8) //num 8
numButtons[8].addEventListener("click", num9) //num 9
numButtons[9].addEventListener("click", numNegative) // negative
numButtons[10].addEventListener("click", num0) // num 0
numButtons[11].addEventListener("click", clear) // clear

//memory buttons
let memoryButtons = document.getElementById("memory").mem
memoryButtons[0].addEventListener("click", memoryAdd) //memory add
memoryButtons[1].addEventListener("click", memorySub) //memory subtract
memoryButtons[2].addEventListener("click", memoryReset) //memory reset

printToScreen("")
