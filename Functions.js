//Created 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Daniel Wu: Added functions for arithmetic operations
//Edited 7/7/2022 by Jake McCann
//Edited 7/7/2022 by Yuhao Yan
//Edited 7/8/2022 by Noah Moon
//Edited 7/12/2022 by Noah Moon
//Edited 7/12/2022 by Jake McCann


/*-------------------- Constants -------------------*/
const Screen = document.getElementById("screen");

/*--------------------- Setup --------------------*/

//Created 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Yuhao Yan
//Edited 7/8/2022 by Noah Moon
//Edited 7/12/2022 by Noah Moon
//Edited 7/12/2022 by Jake McCann
//num buttons
let numButtons = document.getElementById("numbers");
/* Adds event listener for all number buttons (0-9) */
for (let button of numButtons.nums){
    new NumberButton(button)
}
/* Sign Button Event Registration */
new SimpleButton(numButtons.sign, function() {UtilityObj.printToScreen((parseFloat(Screen.innerHTML) * -1).toString());});

/* Clear Button Event Registration */
new SimpleButton(numButtons.clear, UtilityObj.clear); //clear

/* Decimal Button Event Registration */
new SimpleButton(numButtons.dot, function() {
    if(!Screen.innerHTML.includes(".")){ UtilityObj.printToScreen("."); }
    }, ".")


//Created 7/7/2022 by Noah Moon
//Created 7/12/2022 by Noah Moon
//memory buttons
let memory = new Memory();
let memoryButtons = document.getElementById("memory").mem;
/* Adds event listener for M+, M-, and RM */
for (let index = 0; index < memoryButtons.length; index++) {
    new SimpleButton(memoryButtons[index], memory.functions[index]);
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

UtilityObj.printToScreen("");