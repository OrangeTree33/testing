const button = document.querySelector('button');
const paragraph = document.querySelector('h1');
const calcscreen = document.querySelector('#foor')
var number1= "";
let numanswer = [];
let numberanswer = 0;
let tempsymbol = "";
let x= 0;



// button.addEventListener('click', teste);


    
    

function num1(){

    number1 = number1 + "1";
    document.getElementById("output").innerHTML = number1;
    
}
function num2(){
    number1= number1 + "2";
    document.getElementById("output").innerHTML = number1;
    
}
function num3(){
    number1= number1 + "3";
    document.getElementById("output").innerHTML = number1;
    
}
function num4(){
    number1= number1 + "4";
    document.getElementById("output").innerHTML = number1;
    
}
function num5(){
    number1= number1 + "5";
    document.getElementById("output").innerHTML = number1;
    
}
function num6(){
    number1= number1 + "6";
    document.getElementById("output").innerHTML = number1;
    
}
function num7(){
    number1= number1 + "7";
    document.getElementById("output").innerHTML = number1;
   
}
function num8(){
    number1= number1 + "8";
    document.getElementById("output").innerHTML = number1;
   
}
function num9(){
    number1= number1 + "9";
    document.getElementById("output").innerHTML = number1;
    
}
function num0(){
    if(number1!=""){
        number1= number1 + "0";
        document.getElementById("output").innerHTML = number1;
    }
    
}
function numstop(){
    if(x==0){
        number1= number1 + ".";
        document.getElementById("output").innerHTML = number1;
        x=1;
    }
    
}
window.addEventListener("keydown",function(event) {
    if (event.defaultPrevented){
        return;
    }
    switch (event.key){
       
        case "1":
        num1();
        break;
        case "2":
        num2();
        break;
        case "3":
        num3();
        break;
        case "4":
        num4();
        break;
        case "5":
        num5();
        break;
        case "6":
        num6();
        break;
        case "7":
        num7();
        break;
        case "8":
        num8();
        break;
        case "9":
        num9();
        break;
        case "0":
        num0();
        break;
        case ".":
        numstop();
        break;
        case "+":
        numplus();
        break;
        case "-":
        numminus();
        break;
        case "*":
        numx();
        break;
        case "/":
        numdivide();
        break;
        case "Enter":
        numequals();
        break;
        default:
        return;
    }
    event.preventDefault();
},true);
function numplus(){

    var numbertemp= Number(number1)
    numanswer.push(numbertemp)
    numanswer.push("+")
        
    
numbertemp=0;
number1 = "";
x=0
}
function numminus(){
    var numbertemp= Number(number1)
    numanswer.push(numbertemp)
    numanswer.push("-")
    
numbertemp=0;
number1 = "";
x=0
}
function numx(){
    var numbertemp= Number(number1)
    numanswer.push(numbertemp)
    numanswer.push("x")
    
numbertemp=0;
number1 = "";
x=0
}
function numdivide(){
    var numbertemp= Number(number1)
    numanswer.push(numbertemp)
    numanswer.push("/")
    
numbertemp=0;
number1 = "";
x=0
}
function numequals(){
    var numbertemp= Number(number1)
    numanswer.push(numbertemp)
    numberanswer = numanswer[0];
    for(let i = 1; i < numanswer.length; i++){
        if(numanswer[i] == "+"){
            tempsymbol="+"; 
        }else if(numanswer[i] == "-"){
            tempsymbol="-";
        }else if(numanswer[i] == "x"){
            tempsymbol="x"
        }else if (numanswer[i] == "/"){
            tempsymbol="/"
        }
    if(typeof(numanswer[i]) == 'number'&& tempsymbol =="+"){
        numberanswer = Number(numberanswer) + numanswer[i]
    }else if(typeof(numanswer[i])== 'number' && tempsymbol =="-"){
        numberanswer = Number(numberanswer) - numanswer[i]
    }else if(typeof(numanswer[i])== 'number' && tempsymbol =="x"){
        numberanswer = Number(numberanswer) * numanswer[i]
    }else if(typeof(numanswer[i])== 'number' && tempsymbol =="/"){
        numberanswer = Number(numberanswer) / numanswer[i]
    }
    }
    
    JSON.stringify(numberanswer, null, 2);
    
    document.getElementById("output").innerHTML = numberanswer
    numberanswer=0;
    numanswer.length = 0;
    numbertemp=0;
number1 = "";
x=0
}
// add rounding and backspace
