let display = document.getElementById("display");

function toDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "0";
}

function calculate(){
    display.value = eval(display.value).toFixed(2);
}
