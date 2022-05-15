const button = document.querySelector('button');
const paragraph = document.querySelector('h1');
const calcscreen = document.querySelector('#foor')
var number1= "";
let numberanswerplus = [];
let numberanswer = 0;
let tempsymbol = "";
var operations = 0;
let testing = [];
let x= 0;
let z= 0;
let numbertemp2=0;
var end = false;
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
function numplus(){

    var numbertemp= Number(number1)
    numberanswerplus.push(numbertemp)
    numberanswerplus.push("+")
        
    
numbertemp=0;
number1 = "";
x=0
}
function numminus(){
    var numbertemp= Number(number1)
    numberanswerplus.push(numbertemp)
    numberanswerplus.push("-")
    
numbertemp=0;
number1 = "";
x=0
}
function numx(){
    var numbertemp= Number(number1)
    numberanswerplus.push(numbertemp)
    numberanswerplus.push("x")
    
numbertemp=0;
number1 = "";
x=0
}
function numdivide(){
    var numbertemp= Number(number1)
    numberanswerplus.push(numbertemp)
    numberanswerplus.push("/")
    
numbertemp=0;
number1 = "";
x=0
}
function numequals(){
    var numbertemp= Number(number1)
    numberanswerplus.push(numbertemp)
    numberanswer = numberanswerplus[0]; //remember this bigtch
    for(let i = 1; i < numberanswerplus.length; i++){
        if(numberanswerplus[i] == "+"){
            tempsymbol="+"; 
        }else if(numberanswerplus[i] == "-"){
            tempsymbol="-";
        }else if(numberanswerplus[i] == "x"){
            tempsymbol="x"
        }else if (numberanswerplus[i] == "/"){
            tempsymbol="/"
        }
    if(typeof(numberanswerplus[i]) == 'number'&& tempsymbol =="+"){
        numberanswer = Number(numberanswer) + numberanswerplus[i]
    }else if(typeof(numberanswerplus[i])== 'number' && tempsymbol =="-"){
        numberanswer = Number(numberanswer) - numberanswerplus[i]
    }else if(typeof(numberanswerplus[i])== 'number' && tempsymbol =="x"){
        numberanswer = Number(numberanswer) * numberanswerplus[i]
    }else if(typeof(numberanswerplus[i])== 'number' && tempsymbol =="/"){
        numberanswer = Number(numberanswer) / numberanswerplus[i]
    }
    }
    document.getElementById("output").innerHTML = JSON.stringify(numberanswer, null, 2);
    numberanswer=0;
    numberanswerplus.length = 0;
    numbertemp=0;
number1 = "";
x=0
}
// add decimal :)
// add max digit limit (not 11)
