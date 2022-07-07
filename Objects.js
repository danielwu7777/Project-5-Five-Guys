//Created 7/7/2022 by Noah Moon
const Form = document.getElementById("calculator");
const Screen = Form.screen;

function printToScreen(text){
    Screen.innerHTML = text
}

printToScreen("THIS IS A TEST")