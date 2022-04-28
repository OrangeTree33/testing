const button = document.querySelector('button');
const paragraph = document.querySelector('h1');
const calcscreen = document.querySelector('#foor')
var intruder = new Boolean(false);

// button.addEventListener('click', teste);

function num1(){
    calcscreen.textContent = "1";
    intruder = false;
}
function num2(){
    calcscreen.textContent = "2";
    intruder = false;
}
function num3(){
    calcscreen.textContent = "3";
    intruder = false;
}
function num4(){
    calcscreen.textContent = "4";
    intruder = false;
}
function num5(){
    calcscreen.textContent = "5";
    intruder = false;
}
function num6(){
    calcscreen.textContent = "6";
    intruder = true; 
}
function num7(){
    calcscreen.textContent = "7";
    intruder = false;
}
function num8(){
    calcscreen.textContent = "8";
    intruder = false;
}
function num9(){
    calcscreen.textContent = "9";
    if(intruder === true){
        window.location.replace("mistake.html"); //PLEASE DON'T FORGET TO REMOVE WHEN FINISHEDF PROFULDCT PLEASEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
    }
}
function num0(){
    calcscreen.textContent = "0";
}