//Created 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Daniel Wu: Added functions for arithmetic operations
//Edited 7/7/2022 by Yuhao Yan
//Edited 7/8/2022 by Noah Moon
//Edited 7/12/2022 by Noah Moon

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

//Created 7/12/2022 by Noah Moon

/* Constructor for number buttons
   -Registers values
 */
function NumberButton(htmlButton){
    this.setPrintValue(htmlButton.value);
    new SimpleButton(htmlButton,this.print)

}

//Created 7/12/2022 by Noah Moon
/* Constructor for any generic button
   -Registers values
   -Sets print values (optional)
 */
function SimpleButton(htmlButton, clickFunction, printValue){
    this.setPrintValue(printValue);
    htmlButton.addEventListener("click", clickFunction);
}

//Created 7/12/2022 by Noah Moon
//General "class" for button objects
function Button(){
    this.setPrintValue = function(printVal){
        this.print = function (){
            printToScreen(Screen.innerHTML + printVal);
        }
        this.clearPrint = function (){
            printToScreen(printVal);
        }
    }
}

NumberButton.prototype = new Button();
NumberButton.prototype.constructor = NumberButton;
SimpleButton.prototype = new Button();
SimpleButton.prototype.constructor = SimpleButton;


/*--------------------- Setup --------------------*/

//Created 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Yuhao Yan
//Edited 7/8/2022 by Noah Moon
//Edited 7/12/2022 by Noah Moon
//num buttons
let numButtons = document.getElementById("numbers");
/* Adds event listener for all number buttons (0-9) */

for (let button of numButtons.nums){
    new NumberButton(button)
}
new SimpleButton(numButtons.sign, numNegative); //negative
new SimpleButton(numButtons.clear, clear); //clear


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