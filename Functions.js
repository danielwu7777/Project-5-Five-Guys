//Created 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Daniel Wu: Added functions for arithmetic operations
//Edited 7/7/2022 by Yuhao Yan
//Edited 7/8/2022 by Noah Moon
//Edited 7/12/2022 by Noah Moon

/* Constants -------------------*/
const Screen = document.getElementById("screen");

/* Constructors ----------------*/
//Created 7/8/2022 by Noah moon
//Constructor for memory object
function Memory(){
    let memory = 0;
    //Created 7/7/2022 by Noah Moon
    let add = function(){
        memory += parseInt(Screen.innerHTML);
        printToScreen(memory);
    }
    //Created 7/7/2022 by Noah Moon
    let subtract = function(){
        memory -= parseInt(Screen.innerHTML);
        printToScreen(memory);
    }
    //Created 7/7/2022 by Noah Moon
    let reset = function(){
        memory = 0;
        printToScreen(memory);
    }

    this.functions = [add, subtract, reset]
}

/* Functions ------------------*/

//Created 7/7/2022 by Jake McCann
//Edited 7/7/2022 by Daniel Wu
//Edited 7/7/2022 by Noah Moon
//Evaluates equals button functionality
function equalClicked(){
    let rightOperand = parseInt(Screen.innerHTML);
    let result = Operation(leftOperand, rightOperand);
    printToScreen(result)
}

//Created 7/7/2022 by Noah moon
function printToScreen(text){
    Screen.innerHTML = text;
}


//Created 7/7/2022 by Noah Moon
function clear(){
    printToScreen("");
}

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

// Created 7/7/2022 by Noah Moon
function numNegative(){
        printToScreen((parseInt(Screen.innerHTML) * -1).toString());
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

//Created 7/7/2022 by Noah Moon
// TODO: DELETE THIS METHOD
function num(value){
    printToScreen(Screen.innerHTML + value);
}

//Created 7/12/2022 by Noah Moon
/* Constructor for number buttons
   -Registers values
 */
function NumberButton(htmlButton){
    this.value = htmlButton.value;
    htmlButton.addEventListener("click", this.print);
}

//Created 7/12/2022 by Noah Moon
//General "class" for button objects
function Button(){
    this.print = function (){
        printToScreen(Screen.innerHTML + this.value);
    }
}

NumberButton.prototype = new Button();
NumberButton.prototype.constructor = NumberButton;


/* Setup --------------------*/

//Created 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Yuhao Yan
//Edited 7/8/2022 by Noah Moon
//Edited 7/12/2022 by Noah Moon
//num buttons
let numButtons = document.getElementById("numbers");
let buttonArray = [];
/* Adds event listener for all number buttons (0-9) */
for (let button of numButtons.nums){
    buttonArray.push(new NumberButton(button));
}
numButtons.sign.addEventListener("click", numNegative); // negative
numButtons.clear.addEventListener("click", clear); // clear

//Created 7/7/2022 by Noah Moon
//Created 7//2022 by Noah Moon
//memory buttons
let memory = new Memory();
let memoryButtons = document.getElementById("memory").mem;
/* Adds event listener for M+, M-, and RM */
for(let index = 0; index < memoryButtons.length; index++){
    memoryButtons[index].addEventListener("click", memory.functions[index]);
}

// Operator buttons
let operatorButtons = document.getElementById("operations");
operatorButtons[0].addEventListener("click", addClicked); //add button clicked
operatorButtons[1].addEventListener("click", subtractClicked); //subtract button clicked
operatorButtons[2].addEventListener("click", multClicked); //multiplication button clicked
operatorButtons[3].addEventListener("click", divideClicked); //divide button clicked
operatorButtons[4].addEventListener("click", equalClicked); //equal button clicked

printToScreen("");