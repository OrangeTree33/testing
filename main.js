const button = document.querySelector('button');
const paragraph = document.querySelector('h1');
const calcscreen = document.querySelector('#foor')
var number1= "";
let numeranswerplus = 0;
let numberanswer = [];
var intruder = new Boolean(false);
var operations = 0;
// button.addEventListener('click', teste);

function num1(){

    number1 = number1 + "1";
    document.getElementById("output").innerHTML = number1;
    intruder = false;
}
function num2(){
    number1= number1 + "2";
    document.getElementById("output").innerHTML = number1;
    intruder = false;
}
function num3(){
    number1= number1 + "3";
    document.getElementById("output").innerHTML = number1;
    intruder = false;
}
function num4(){
    number1= number1 + "4";
    document.getElementById("output").innerHTML = number1;
    intruder = false;
}
function num5(){
    number1= number1 + "5";
    document.getElementById("output").innerHTML = number1;
    intruder = false;
}
function num6(){
    number1= number1 + "6";
    document.getElementById("output").innerHTML = number1;
    intruder = true; 
}
function num7(){
    number1= number1 + "7";
    document.getElementById("output").innerHTML = number1;
    intruder = false;
}
function num8(){
    number1= number1 + "8";
    document.getElementById("output").innerHTML = number1;
    intruder = false;
}
function num9(){
    number1= number1 + "9";
    document.getElementById("output").innerHTML = number1;
    if(intruder === true){
        window.location.replace("mistake.html"); //PLEASE DON'T FORGET TO REMOVE WHEN FINISHEDF PROFULDCT PLEASEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
    }
}
function num0(){
    if(number1!=""){
        number1= number1 + "0";
        document.getElementById("output").innerHTML = number1;
    }
    
}
function numplus(){
operations++;
var numbertemp= Number(number1)
let bruhnum = numberanswer.push(number1)
let bruhsymb = numberanswer.push("+");
console.log(operations);
console.log(numbertemp);
console.log(numberanswer);
numbertemp=0;
number1 = "";
}
function numequals(){
    let bruhnum = numberanswer.push(number1)
    //for(let i= 0; i < numberanswer.length / 3; i++){  bro
        
    //}
   document.getElementById("output").innerHTML = JSON.stringify(numberanswer, null, 2);
}