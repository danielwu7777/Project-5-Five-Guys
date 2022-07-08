//Created 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Noah Moon
// Edited 7/7/2022 by Daniel Wu: Added functions for arithmetic operations

const Screen = document.getElementById("screen");

//Created 7/7/2022 by Jake McCann
//Edited 7/7/2022 by Daniel Wu
//Evaluates equals button functionality
function equalClicked(){
    let rightOperand = parseInt(Screen.innerHTML);
    clear();
    let result = Operation(leftOperand, rightOperand);
    Screen.innerHTML = result;
}

//Created 7/7/2022 by Noah moon
function printToScreen(text){
    Screen.innerHTML = text;
}

//Created 7/7/2022 by Noah Moon
function memoryAdd(){
    memory += parseInt(Screen.innerHTML);
    printToScreen(memory);
}

//Created 7/7/2022 by Noah Moon
function memorySub(){
    memory -= parseInt(Screen.innerHTML);
    printToScreen(memory);
}

//Created 7/7/2022 by Noah Moon
function memoryReset(){
    memory = 0;
    printToScreen(memory);
}

//Created 7/7/2022 by Noah Moon
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

//Created 7/7/2022 by Noah Moon
function numNegative(){
        printToScreen((parseInt(Screen.innerHTML) * -1).toString());
}

//Created 7/7/2022 by Noah Moon
function clear(){
    printToScreen("");
}

var memory = 0;
let Operation;
let leftOperand;

function printToScreen(text){
    Screen.innerHTML = text
}

// Created 7/7/2022 by Daniel Wu
// Modified 7/7/2022 by Jake McCann: make Operation anonymous
function addClicked() {
    leftOperand = parseInt(Screen.innerHTML);
    Operation = function (operand1, operand2) {
        return operand1 + operand2;
    }
    clear();
}

// Created 7/7/2022 by Daniel Wu
// Modified 7/7/2022 by Jake McCann: make Operation anonymous
function subtractClicked() {
    leftOperand = parseInt(Screen.innerHTML);
    Operation = function (operand1, operand2) {
        return operand1 - operand2;
    }
    clear();
}

// Created 7/7/2022 by Daniel Wu
// Modified 7/7/2022 by Jake McCann: make Operation anonymous
function multClicked() {
    leftOperand = parseInt(Screen.innerHTML);
    Operation = function (operand1, operand2) {
        return operand1 * operand2;
    }
    clear();
}

// Created 7/7/2022 by Daniel Wu
// Modified 7/7/2022 by Jake McCann: make Operation anonymous
function divideClicked() {
    leftOperand = parseInt(Screen.innerHTML);
    Operation = function (operand1, operand2) {
        return operand1 / operand2;
    }
    clear();
}

//num buttons
let numButtons = document.getElementById("numbers");
console.log(numButtons);
numButtons[0].addEventListener("click", num1); //num 1
numButtons[1].addEventListener("click", num2); //num 2
numButtons[2].addEventListener("click", num3); //num 3
numButtons[3].addEventListener("click", num4); //num 4
numButtons[4].addEventListener("click", num5); //num 5
numButtons[5].addEventListener("click", num6); //num 6
numButtons[6].addEventListener("click", num7); //num 7
numButtons[7].addEventListener("click", num8); //num 8
numButtons[8].addEventListener("click", num9); //num 9
numButtons[9].addEventListener("click", numNegative); // negative
numButtons[10].addEventListener("click", num0); // num 0
numButtons[11].addEventListener("click", clear); // clear

//memory buttons
let memoryButtons = document.getElementById("memory").mem;
memoryButtons[0].addEventListener("click", memoryAdd); //memory add
memoryButtons[1].addEventListener("click", memorySub); //memory subtract
memoryButtons[2].addEventListener("click", memoryReset); //memory reset

// Operator buttons
let operatorButtons = document.getElementById("operations");
operatorButtons[0].addEventListener("click", addClicked); //add button clicked
operatorButtons[1].addEventListener("click", subtractClicked); //subtract button clicked
operatorButtons[2].addEventListener("click", multClicked); //multiplication button clicked
operatorButtons[3].addEventListener("click", divideClicked); //divide button clicked
operatorButtons[4].addEventListener("click", equalClicked); //equal button clicked

printToScreen("");
