//Created 7/7/2022 by Noah Moon
//Edited 7/7/2022 by Noah Moon
const Screen = document.getElementById("screen");

//Created 7/7/2022 by Noah Moon
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

//Created 7/7/2022 by Noah Moon
function num2(){
    printToScreen(Screen.innerHTML + "2");
}

//Created 7/7/2022 by Noah Moon
function num3(){
    printToScreen(Screen.innerHTML + "3");
}

//Created 7/7/2022 by Noah Moon
function num4(){
    printToScreen(Screen.innerHTML + "4");
}

//Created 7/7/2022 by Noah Moon
function num5(){
    printToScreen(Screen.innerHTML + "5");
}

//Created 7/7/2022 by Noah Moon
function num6(){
    printToScreen(Screen.innerHTML + "6");
}

//Created 7/7/2022 by Noah Moon
function num7(){
    printToScreen(Screen.innerHTML + "7");
}

//Created 7/7/2022 by Noah Moon
function num8(){
    printToScreen(Screen.innerHTML + "8");
}

//Created 7/7/2022 by Noah Moon
function num9(){
    printToScreen(Screen.innerHTML + "9");
}

//Created 7/7/2022 by Noah Moon
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

//num buttons
console.log(document.getElementById("numbers"))
let numButtons = document.getElementById("numbers");
console.log(numButtons)
numButtons[0].addEventListener("click", num1) //num 1
numButtons[1].addEventListener("click", num2) //num 2
numButtons[2].addEventListener("click", num3) //num 3
numButtons[3].addEventListener("click", num4) //num 4
numButtons[4].addEventListener("click", num5) //num 5
numButtons[5].addEventListener("click", num6) //num 6
numButtons[6].addEventListener("click", num7) //num 7
numButtons[7].addEventListener("click", num8) //num 8
numButtons[8].addEventListener("click", num9) //num 9
numButtons[9].addEventListener("click", numNegative) // negative
numButtons[10].addEventListener("click", num0) // num 0
numButtons[11].addEventListener("click", clear) // clear

//memory buttons
let memoryButtons = document.getElementById("memory").mem
memoryButtons[0].addEventListener("click", memoryAdd) //memory add
memoryButtons[1].addEventListener("click", memorySub) //memory subtract
memoryButtons[2].addEventListener("click", memoryReset) //memory reset

printToScreen("")
