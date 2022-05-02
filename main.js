const button = document.querySelector('button');
const paragraph = document.querySelector('h1');
const calcscreen = document.querySelector('#foor')
var number1= "";
let numberanswerplus = [];
let numberanswer = [];
let lastsymbol = "";
var intruder = new Boolean(false);
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
    if(x == 0){
        var numbertemp= Number(number1)
        numberanswerplus.unshift(numbertemp)
        console.log(numberanswerplus)
        numbertemp=0;
    } else if (x == 1 && lastsymbol == "+"){
        numbertemp = Number(number1)
        numberanswerplus[0] =numberanswerplus[0]+ numbertemp; 
        numbertemp2=numbertemp
        numbertemp= 0;
        
    }else if (x == 1 && lastsymbol == "-"){
        numbertemp = Number(number1)
        numberanswerplus[0] = numberanswerplus[0] - numbertemp2;
    }

// make numbertemp & numbertemp2 arrays


lastsymbol = "+";
    x=1;
number1 = "";
}
function numminus(){
    if(x == 0){
        var numbertemp= Number(number1)
        numberanswerplus[0] = numbertemp
        numbertemp2 = numbertemp;
        numbertemp=0;
    } else if (x == 1 && lastsymbol == "-"){
        numbertemp = Number(number1)
        numberanswerplus[0] = Number(numberanswerplus[0]) - numbertemp; 
        numbertemp= 0;
        
    } else if (x == 1 && lastsymbol == "+"){
        console.log(number1);
        numbertemp = Number(number1)
        console.log(numbertemp)
        z++;
        numberanswerplus[z] = numbertemp; 
        numbertemp= 0;
    }

lastsymbol = "-";
    x=1;
numbertemp=0;
number1 = "";
console.log(x)
}
function numequals(){
    
    if(lastsymbol =="+"){
        numbertemp = Number(number1)
        numberanswerplus[0] = Number(numberanswerplus[0])+numbertemp; 
        numbertemp= 0;
    } else if (lastsymbol =="-"){
        numbertemp = Number(number1)
        numberanswerplus[0] =Number(numberanswerplus[0]) - numbertemp; 
        numbertemp= 0;
    }
    console.log(lastsymbol)
    for (var i = 1; i <=z ; i++){
        numberanswerplus[0] = Number(numberanswerplus[0]) + Number(numberanswerplus[i])
    }
    
    let a = numberanswerplus[0]
    document.getElementById("output").innerHTML = JSON.stringify(a, null, 2);
    console.log(numberanswerplus)
    console.log(x)
    
}