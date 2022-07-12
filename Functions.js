//Created 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Daniel Wu: Added functions for arithmetic operations
//Edited 7/7/2022 by Yuhao Yan
//Edited 7/8/2022 by Noah Moon

/*-------------------- Constants -------------------*/
const Screen = document.getElementById("screen");

/*------------------- Constructors ----------------*/
//Created 7/8/2022 by Noah moon
//Constructor for memory object
function Memory() {
    let memory = 0;
    //Created 7/7/2022 by Noah Moon
    let add = function () {
        memory += parseInt(Screen.innerHTML);
        printToScreen(memory);
    }
    //Created 7/7/2022 by Noah Moon
    let subtract = function () {
        memory -= parseInt(Screen.innerHTML);
        printToScreen(memory);
    }
    //Created 7/7/2022 by Noah Moon
    let reset = function () {
        memory = 0;
        printToScreen(memory);
    }

    this.functions = [add, subtract, reset];
}

// Created 7/12/2022 by Daniel Wu
// Constructor for evaluation object
function Evaluation() {
    let operation;
    let leftOperand;
    let rightOperand;
    let result;
    this.functions = [addClicked, subtractClicked, multClicked, divideClicked, equalClicked];

    // Created 7/7/2022 by Daniel Wu
    // Modified 7/7/2022 by Jake McCann: make operation anonymous
    // Modified 7/12/2022 by Daniel Wu: moved to Evaluation "class"
    function addClicked() {
        Evaluation.leftOperand = parseInt(Screen.innerHTML);
        Evaluation.operation = function (operand1, operand2) {
            return operand1 + operand2;
        }
        clear();
    }

    // Created 7/7/2022 by Daniel Wu
    // Modified 7/7/2022 by Jake McCann: make operation anonymous
    // Modified 7/12/2022 by Daniel Wu: moved to Evaluation "class"
    function subtractClicked() {
        Evaluation.leftOperand = parseInt(Screen.innerHTML);
        Evaluation.operation = function (operand1, operand2) {
            return operand1 - operand2;
        }
        clear();
    }

    // Created 7/7/2022 by Daniel Wu
    // Modified 7/7/2022 by Jake McCann: make operation anonymous
    // Modified 7/12/2022 by Daniel Wu: moved to Evaluation "class"
    function multClicked() {
        Evaluation.leftOperand = parseInt(Screen.innerHTML);
        Evaluation.operation = function (operand1, operand2) {
            return operand1 * operand2;
        }
        clear();
    }

    // Created 7/7/2022 by Daniel Wu
    // Modified 7/7/2022 by Jake McCann: make operation anonymous
    // Modified 7/12/2022 by Daniel Wu: moved to Evaluation "class"
    function divideClicked() {
        Evaluation.leftOperand = parseInt(Screen.innerHTML);
        Evaluation.operation = function (operand1, operand2) {
            return operand1 / operand2;
        }
        clear();
    }

    //Created 7/7/2022 by Jake McCann
    //Edited 7/7/2022 by Daniel Wu
    //Edited 7/7/2022 by Noah Moon
    //Evaluates equals button functionality
    // Modified 7/12/2022 by Daniel Wu: moved to Evaluation "class"
    function equalClicked() {
        Evaluation.rightOperand = parseInt(Screen.innerHTML);
        Evaluation.result = Evaluation.operation(Evaluation.leftOperand, Evaluation.rightOperand);
        printToScreen(Evaluation.result)
    }
}

/* ---------------- Functions ------------------*/

//Created 7/7/2022 by Noah moon
function printToScreen(text) {
    Screen.innerHTML = text;
}

//Created 7/7/2022 by Noah Moon
function numNegative() {
    printToScreen((parseInt(Screen.innerHTML) * -1).toString());
}

//Created 7/7/2022 by Noah Moon
function clear() {
    printToScreen("");
}

function printToScreen(text) {
    Screen.innerHTML = text
}

// Created 7/7/2022 by Noah Moon
function numNegative() {
    printToScreen((parseInt(Screen.innerHTML) * -1).toString());
}



//Created 7/7/2022 by Noah Moon
// TODO: DELETE THIS METHOD
function num(value) {
    printToScreen(Screen.innerHTML + value);
}

//Created 7/12/2022 by Noah Moon
function NumberButton(htmlButton) {
    this.value = htmlButton.value;
    htmlButton.addEventListener("click", this.printFunc(htmlButton.value));
}
NumberButton.prototype = {
    printFunc: function (val) {
        return function x() {
            printToScreen(Screen.innerHTML + val);
        };
    }
};


/*--------------------- Setup --------------------*/

//Created 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Yuhao Yan
//Edited 7/8/2022 by Noah Moon
//Edited 7/12/2022 by Noah Moon
//num buttons
let numButtons = document.getElementById("numbers");
let buttonArray = [];
/* Adds event listener for all number buttons (0-9) */
for (let button of numButtons.nums) {
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
for (let index = 0; index < memoryButtons.length; index++) {
    memoryButtons[index].addEventListener("click", memory.functions[index]);
}

// Created 7/7/2022 by Daniel Wu
// Edited 7/12/2022 by Daniel Wu: added for loop for event listeners
// Operator buttons
let evaluation = new Evaluation();
let operatorButtons = document.getElementById("operations");
// Add event listeners for operator buttons
for (let index = 0; index < operatorButtons.length; index++) {
    operatorButtons[index].addEventListener("click", evaluation.functions[index]);
}

printToScreen("");