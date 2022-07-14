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
//Edited 7/14/2022 by Noah Moon

/*-------------------- Constants -------------------*/
const FormArray = document.forms;

/*-------------------- Variables --------------------*/
let numButtons = FormArray[1];
let memoryButtons = FormArray[0];
let operatorButtons = FormArray[2];

/*-------------------- Objects --------------------*/

let enableManager = new EnableManager(operatorButtons, memoryButtons, numButtons);

/*--------------------- Setup --------------------*/

//Created 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Yuhao Yan
//Edited 7/8/2022 by Noah Moon
//Edited 7/12/2022 by Noah Moon
//Edited 7/12/2022 by Jake McCann: fix clear button, add decimal button
//Edited 7/12/2022 by Yuhao Yan: add backspace button
//Edited 7/13/2022 by Noah Moon

/*--- Num Button Registration ---*/
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
    if(Screen.innerHTML.length>0 && !isNaN(Screen.innerHTML) && Screen.innerHTML!="Infinity"){
        UtilityObj.printToScreen(Screen.innerHTML.substr(0,Screen.innerHTML.length-1));
    }});

/* All Clear button registration */
new SimpleButton(numButtons.allClear,UtilityObj.allClear);

//Created 7/7/2022 by Noah Moon
//Created 7/12/2022 by Noah Moon
/*--- Memory button registration ---*/
/* Adds event listener for M+, M-, and RM */
for (let index = 0; index < memoryButtons.length; index++) {
    new SimpleButton(memoryButtons[index], memory.functions[index]);
}

// Created 7/7/2022 by Daniel Wu
// Edited 7/12/2022 by Daniel Wu: added for loop for event listeners
// Edited 7/13/2022 by Noah Moon
/*--- Operator button registration ---*/
// Add event listeners for operator buttons
for (let index = 0; index < operatorButtons.length; index++) {
    new SimpleButton(operatorButtons[index], evaluation.functions[index]);
}

UtilityObj.start(operatorButtons,memoryButtons,numButtons);
