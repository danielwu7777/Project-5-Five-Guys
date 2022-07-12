//Created 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Daniel Wu: Added functions for arithmetic operations
//Edited 7/7/2022 by Yuhao Yan
//Edited 7/8/2022 by Noah Moon
//Edited 7/12/2022 by Noah Moon

/*-------------------- Constants -------------------*/
const Screen = document.getElementById("screen");

/* ---------------- Functions ------------------*/

//Created 7/7/2022 by Noah moon
function printToScreen(text) {
    Screen.innerHTML = text;
}

//Created 7/7/2022 by Noah Moon
function clear() {
    printToScreen("");
}


// Created 7/7/2022 by Noah Moon
function numNegative() {
    printToScreen((parseInt(Screen.innerHTML) * -1).toString());
}

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