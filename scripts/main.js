// do if statement with function later

document.getElementById("hotness").onclick = function(){
    var TomaHotness = document.getElementById("numberr").value;
    console.log(TomaHotness)
    if(TomaHotness <=5){
        var HotnessAnswer = "Bro you're kinda lying :/"; // NO IM NOT 😡 < is les!s than 5
        console.log("penis");

    }else {
        console.log("not penis");
    }
    
    const h1 = document.createElement("h1");
    const big = document.createElement("big");
    big.innerText=HotnessAnswer;
    h1.append(big)
    document.body.append(h1);

}




