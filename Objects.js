//Created 7/7/2022 by Noah Moon
//Edited 7/12/2022 by Noah Moon
//Edited 7/12/2022 by Jake McCann
//Edited 7/12/2022 by Yuhao Yan
//Edited 7/13/2022 by Noah Moon

/*------------------- Constants ----------------*/
const UtilityObj = new Utility(); //contains printToScreen and Clear

/*------------------- Constructors ----------------*/
//Created 7/12/2022 by Noah Moon
function Utility(){
    //Created 7/7/2022 by Noah moon
    //Edited 7/12/2022 by Yuhao Yan: implement for invalid operations
    this.printToScreen = function(text) {
        if (text.toString() == "NaN") {
            text = "invalid opration";
        }
        Screen.innerHTML = text;
    }

    //Created 7/7/2022 by Noah Moon
    this.clear = function() {
        this.printToScreen("");
        enableManager.disable();
    }
}


//Created 7/8/2022 by Noah moon
//Edited 7/12/2022 by Noah Moon
//Edited 7/12/2022 by Jake McCann
//Constructor for memory object
function Memory() {
    let memory = 0;
    //Created 7/7/2022 by Noah Moon
    //Edited 7/12/2022 by Jake McCann: implement decimals
    let add = function () {
        memory += parseFloat(Screen.innerHTML);
        UtilityObj.printToScreen(memory);
    }
    //Created 7/7/2022 by Noah Moon
    //Edited 7/12/2022 by Jake McCann: implement decimals
    let subtract = function () {
        memory -= parseFloat(Screen.innerHTML);
        UtilityObj.printToScreen(memory);
    }
    //Created 7/7/2022 by Noah Moon
    let reset = function () {
        memory = 0;
        UtilityObj.printToScreen(memory);
    }

    this.functions = [add, subtract, reset];
}

// Created 7/12/2022 by Daniel Wu
//Edited 7/12/2022 by Noah Moon
//Edited 7/12/2022 by Jake McCann
// Constructor for evaluation object
function Evaluation() {
    let operation;
    let leftOperand;
    let rightOperand;
    let result;
    this.functions = [addClicked, subtractClicked, multClicked, divideClicked, exponentClicked, rootClicked,equalClicked];
    let isOperator = false;
    this.getIsOp = function (){return isOperator};
    // Created 7/7/2022 by Daniel Wu
    // Modified 7/7/2022 by Jake McCann: make operation anonymous
    // Modified 7/12/2022 by Daniel Wu:e
    //Edited 7/12/2022 by Jake McCann: implement decimals
    function addClicked() {
        Evaluation.leftOperand = parseFloat(Screen.innerHTML);
        Evaluation.operation = function(operand1, operand2) {
            return operand1 + operand2;
        };
        isOperator = true;
        UtilityObj.clear();

    }

    // Created 7/7/2022 by Daniel Wu
    // Modified 7/7/2022 by Jake McCann: make operation anonymous
    // Modified 7/12/2022 by Daniel Wu: moved to Evaluation "class"
    // Edited 7/12/2022 by Noah Moon
    //Edited 7/12/2022 by Jake McCann: implement decimals
    function subtractClicked() {
        Evaluation.leftOperand = parseFloat(Screen.innerHTML);
        Evaluation.operation = function(operand1, operand2) {
            return operand1 - operand2;
        };
        isOperator = true;
        UtilityObj.clear();
    }

    // Created 7/7/2022 by Daniel Wu
    // Modified 7/7/2022 by Jake McCann: make operation anonymous
    // Modified 7/12/2022 by Daniel Wu: moved to Evaluation "class"
    // Edited 7/12/2022 by Noah Moon
    //Edited 7/12/2022 by Jake McCann: implement decimals
    function multClicked() {
        Evaluation.leftOperand = parseFloat(Screen.innerHTML);
        Evaluation.operation = function(operand1, operand2) {
            return operand1 * operand2;
        };
        isOperator = true;
        UtilityObj.clear();
    }

    // Created 7/7/2022 by Daniel Wu
    // Modified 7/7/2022 by Jake McCann: make operation anonymous
    // Modified 7/12/2022 by Daniel Wu: moved to Evaluation "class"
    // Edited 7/12/2022 by Noah Moon
    //Edited 7/12/2022 by Jake McCann: implement decimals
    //Edited 7/12/2022 by Yuhao Yan: implement result when dividing 0
    function divideClicked() {
        Evaluation.leftOperand = parseFloat(Screen.innerHTML);
        Evaluation.operation = function(operand1, operand2) {
            if(operand2 == 0){
                return "invalid divisor";
            }
            return operand1 / operand2;
        };
        isOperator = true;
        UtilityObj.clear();
    }

    // Created 7/12/2022 by Jake McCann
    function exponentClicked() {
        Evaluation.leftOperand = parseFloat(Screen.innerHTML);
        Evaluation.operation = function(base, exponent) {
            return Math.pow(base,exponent);
        };
        isOperator = true;
        UtilityObj.clear();
    }

    // Create 7/12/2022 by Jake McCann
    function rootClicked() {
        Evaluation.leftOperand = parseFloat(Screen.innerHTML);
        Evaluation.operation = function(base, root) {
            return Math.pow(base,1/root);
        };
        isOperator = true;
        UtilityObj.clear();
    }

    //Created 7/7/2022 by Jake McCann
    //Edited 7/7/2022 by Daniel Wu
    //Edited 7/7/2022 by Noah Moon
    //Evaluates equals button functionality
    //Modified 7/12/2022 by Daniel Wu: moved to Evaluation "class"
    //Edited 7/12/2022 by Jake McCann: implement decimals
    function equalClicked() {
        Evaluation.rightOperand = parseFloat(Screen.innerHTML);
        Evaluation.result = Evaluation.operation(Evaluation.leftOperand, Evaluation.rightOperand);
        isOperator = false;
        UtilityObj.printToScreen(Evaluation.result);
    }

}

//Created 7/12/2022 by Noah Moon
//Edited 7/13/2022 by Noah Moon
/*
   Constructor for any generic button

   Functionality:
   - Registers values
   - Sets print values

   Params:
   - htmlButton: html element as javascript object
   - clickFunction: function to be called on click (Optional, print by default)
   - printValue: what to print when calling this.print or this.clearPrint (Optional, button value by default)
 */
function SimpleButton(htmlButton, clickFunction, printValue){
    printValue = (printValue === undefined) ? htmlButton.value: printValue; // sets default print value to button value
    this.setPrintValue(printValue); // sets print value, creates print functions
    clickFunction = (clickFunction === undefined) ? this.print : clickFunction; // sets default function to print
    htmlButton.addEventListener("click", clickFunction);
}

//Created 7/12/2022 by Noah Moon
//General prototype for all button objects
function Button(){
    this.setPrintValue = function(printVal){
        this.print = function (){
            UtilityObj.printToScreen(Screen.innerHTML + printVal);
        };
        this.clearPrint = function (){
            UtilityObj.printToScreen(printVal);
        };
    }
}

SimpleButton.prototype = new Button();
SimpleButton.prototype.constructor = SimpleButton;

//Created 7/13/2022 by Noah Moon
function EnableManager(){
    this.disable = disableForBlank;

    //Created 7/13/2022 by Noah Moon
    function disableForBlank(){
        for(button of operatorButtons){
            button.disabled = true;
        }
        for(button of memoryButtons){
            button.disabled = (button == memoryButtons[2]) ? false : true;
        }
        numButtons.sign.disabled = true;
        numButtons.back.disabled = true;
    }

    //Created 7/13/2022 by Noah Moon
    function enableController(){
        for(button of operatorButtons){
                button.disabled = (button.value == "=") ? !evaluation.getIsOp(): evaluation.getIsOp();

        }
        for(button of memoryButtons){
            button.disabled = false;
        }
        numButtons.sign.disabled = false;
        numButtons.back.disabled = false;

    }
    //Created 7/13/2022 by Noah Moon
    function disableController(){
        if (Screen.innerHTML.length <= 1){
            disableForBlank();
        }else {
            enableController();
        }
    }

    Screen.addEventListener("DOMNodeInserted", enableController);
    Screen.addEventListener("DOMNodeRemoved", disableController);
}