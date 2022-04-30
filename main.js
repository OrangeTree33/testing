const button = document.querySelector('button');
const paragraph = document.querySelector('h1');
const calcscreen = document.querySelector('#foor')
var number1= "";
let numberanswerplus = 0;
let numberanswer = [];
let symbolanswer = [];
var intruder = new Boolean(false);
var operations = 0;
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
operations++;
var numbertemp= Number(number1)
numberanswer.unshift(number1)
symbolanswer.unshift("+");


numbertemp=0;
number1 = "";
}
function numequals(){
    // numberanswer.unshift(number1)
    // console.log(numberanswer);
    // console.log(symbolanswer);
    // for(let i= 0;numberanswer.length > 1; i++){  
        
        
    //         if(symbolanswer[i]=== "+"){
    //             if(numberanswer.length >= 1){
    //                 numberanswerplus = Number(numberanswer[i]) + Number(numberanswer[i+1]);
    //             numberanswer.splice(0,2);
    //             } else if(numberanswer.length <2){
                    
    //                 numberanswerplus+= Number(numberanswer[i]);
    //                 document.getElementById("output").innerHTML = JSON.stringify(numberanswerplus, null, 2);
    //                 console.log("lol");
                    
    //             }
    //         }
        
        
        
    // }
   

    // rewrite everything to the symbol functions


}