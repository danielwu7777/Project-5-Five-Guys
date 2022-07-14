//Created 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Daniel Wu: Added functions for arithmetic operations
//Edited 7/7/2022 by Jake McCann
//Edited 7/7/2022 by Yuhao Yan
//Edited 7/8/2022 by Noah Moon
//Edited 7/12/2022 by Noah Moon
//Edited 7/12/2022 by Jake McCann
//Edited 7/12/2022 by Yuhao Yan
//Edited 7/13/2022 by Noah Moon

/*-------------------- Constants -------------------*/
const Screen = document.getElementById("screen");
const FormArray = document.forms;

/*--------------------- Setup --------------------*/

//Created 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Yuhao Yan
//Edited 7/8/2022 by Noah Moon
//Edited 7/12/2022 by Noah Moon
//Edited 7/12/2022 by Jake McCann: fix clear button, add decimal button
//Edited 7/12/2022 by Yuhao Yan: add backspace button
//Edited 7/13/2022 by Noah Moon

//num buttons
let numButtons = FormArray[1];
/* Adds event listener for all number buttons (0-9) */
for (let button of numButtons.nums){
    new SimpleButton(button);
}
/* Sign Button Event Registration */
//Edited 7/12/2022 by Yuhao Yan: remove type coercion to String
new SimpleButton(numButtons.sign, function() {UtilityObj.printToScreen(parseFloat(Screen.innerHTML) * -1);});

/* Clear Button Event Registration */
new SimpleButton(numButtons.clear, function() { UtilityObj.clear(); }); //clear

/* Decimal Button Event Registration */
new SimpleButton(numButtons.decimal, function() {
    if(!Screen.innerHTML.includes(".")){ UtilityObj.printToScreen(Screen.innerHTML + "."); } });

/* Backspace Button Event Registration */
new SimpleButton(numButtons.back, function() {
    if(Screen.innerHTML.length>0 && !isNaN(Screen.innerHTML)){
        UtilityObj.printToScreen(Screen.innerHTML.substr(0,Screen.innerHTML.length-1));
    }});

//Created 7/7/2022 by Noah Moon
//Created 7/12/2022 by Noah Moon
//memory buttons
let memory = new Memory();
let memoryButtons = FormArray[0];
/* Adds event listener for M+, M-, and RM */
for (let index = 0; index < memoryButtons.length; index++) {
    new SimpleButton(memoryButtons[index], memory.functions[index]);
}

// Created 7/7/2022 by Daniel Wu
// Edited 7/12/2022 by Daniel Wu: added for loop for event listeners
// Operator buttons
let evaluation = new Evaluation();
let operatorButtons = FormArray[2];
// Add event listeners for operator buttons
for (let index = 0; index < operatorButtons.length; index++) {
    operatorButtons[index].addEventListener("click", evaluation.functions[index]);
}

let enableManager = new EnableManager();

UtilityObj.printToScreen("");
enableManager.disable();
