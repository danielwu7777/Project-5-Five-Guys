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
function addClicked() {
    leftOperand = parseInt(Screen.innerHTML);
    Operation = sum;
    clear();
}

// Created 7/7/2022 by Daniel Wu
function subtractClicked() {
    leftOperand = parseInt(Screen.innerHTML);
    Operation = difference;
    clear();
}

// Created 7/7/2022 by Daniel Wu
function multClicked() {
    leftOperand = parseInt(Screen.innerHTML);
    Operation = product;
    clear();
}

// Created 7/7/2022 by Daniel Wu
function divideClicked() {
    leftOperand = parseInt(Screen.innerHTML);
    Operation = quotient;
    clear();
}

// Created 7/7/2022 by Daniel Wu
// Takes two integers and returns the sum
function sum(x, y) {
    return x + y;
}

// Created 7/7/2022 by Daniel Wu
// Takes two integers and returns the first input minus the second
function difference(left, right) {
    return left - right;
}

// Created 7/7/2022 by Daniel Wu
// Takes two integers and returns the product
function product(x, y) {
    return x * y;
}

// Created 7/7/2022 by Daniel Wu
// Takes two integers and returns the first input divided by the second
function quotient(x, y) {
    return x / y;
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
