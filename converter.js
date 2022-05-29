function showUnitsA() {
	document.getElementById("unitADropdown").classList.toggle("show");	
}
function showUnitsB() {
	document.getElementById("unitBDropdown").classList.toggle("show");
	
}
function showUnitsMain() {
	document.getElementById("chooseUnitBtn").classList.toggle("show2");	
}

window.onclick = function (event) {    //isjungia dropdown kai paspaudi kitur
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

window.onclick = function (event) {    //isjungia dropdown kai paspaudi kitur
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content2");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show2')) {
				openDropdown.classList.remove('show2');
			}
		}
	}
}

var data = {
	unit: undefined,		// lenght, weight, volume
	subUnitA: undefined,	// m, cm, mm etc...
	subUnitB: undefined,	// km, dcm, dmm etc...
	value: undefined, 		// float | value to convert
	result: undefined 		// float | result of conversion
}

let lenght = {
	unitTop: "Meter",
	unitMid: "Centimeter",
	unitBot: "Milimeter"
}

let weight = {
	unitTop: "Kilogram",
	unitMid: "Gram",
	unitBot: "Milligram"
}

let volume = {
	unitTop: "Liter",
	unitMid: "Milliliter",
	unitBot: "Centiliter"
}

// Set the unit field for conversion
function setUnit(unit) {
	switch (unit) {
		case "lenght":
			document.getElementById("subunit1A").innerHTML = lenght.unitTop;
			document.getElementById("subunit2A").innerHTML = lenght.unitMid;
			document.getElementById("subunit3A").innerHTML = lenght.unitBot;
			document.getElementById("subunit1B").innerHTML = lenght.unitTop;
			document.getElementById("subunit2B").innerHTML = lenght.unitMid;
			document.getElementById("subunit3B").innerHTML = lenght.unitBot;
			break;
		case "weight":
			document.getElementById("subunit1A").innerHTML = weight.unitTop;
			document.getElementById("subunit2A").innerHTML = weight.unitMid;
			document.getElementById("subunit3A").innerHTML = weight.unitBot;
			document.getElementById("subunit1B").innerHTML = weight.unitTop;
			document.getElementById("subunit2B").innerHTML = weight.unitMid;
			document.getElementById("subunit3B").innerHTML = weight.unitBot;
			break;
		case "volume":
			document.getElementById("subunit1A").innerHTML = volume.unitTop;
			document.getElementById("subunit2A").innerHTML = volume.unitMid;
			document.getElementById("subunit3A").innerHTML = volume.unitBot;
			document.getElementById("subunit1B").innerHTML = volume.unitTop;
			document.getElementById("subunit2B").innerHTML = volume.unitMid;
			document.getElementById("subunit3B").innerHTML = volume.unitBot;
			break;
			
	}
	
	return data.unit = unit;
	
}

// Set the subunit
// subUnit 	= 	unitTop
//           	unitMid
//           	unitBot
// A 		= 	TRUE / FALSE
function setSubUnit(subUnit, A) {
	if (A) {
		data.subUnitA = subUnit;
	} else {
		data.subUnitB = subUnit;
	}
	
}

// lenght: m, cm, mm 100
// weight: kg, g, mg 1000
// volume: l, ml, centileter 1000

function convert() {
	var value = document.getElementById("inputA").value;
	data.value = parseFloat(value);

	// for LENGHT
	if (data.unit === 'lenght' && data.subUnitA != undefined && data.subUnitB != undefined) {
		// convert the value
		switch (data.subUnitA) {
			case "unitTop":
				switch (data.subUnitB) {
					case "unitMid":
						data.result = data.value * 100;
						break;
					case "unitBot":
						data.result = data.value * 1000;
						break;
					default:
						data.result = data.value;
						break;
				}
				break;
			case "unitMid":
				switch (data.subUnitB) {
					case "unitTop":
						data.result = data.value / 100;
						break;
					case "unitBot":
						data.result = data.value * 10;
						break;
					default:
						data.result = data.value;
						break;
				}
				break;
			case "unitBot":
				switch (data.subUnitB) {
					case "unitTop":
						data.result = data.value / 1000;
						break;
					case "unitMid":
						data.result = data.value / 10;
						break;
					default:
						data.result = data.value;
						break;
				}
				break;
			default:
				data.result = data.value;
				break;
		}
	}
	// for WEIGHT
	else if (data.unit === "weight" && data.subUnitA != undefined && data.subUnitB != undefined) {
		// convert the value
		switch (data.subUnitA) {
			case "unitTop":
				switch (data.subUnitB) {
					case "unitMid":
						data.result = data.value * 1000;
						break;
					case "unitBot":
						data.result = data.value * 10000;
						break;
					default:
						data.result = data.value;
						break;
				}
				break;
			case "unitMid":
				switch (data.subUnitB) {
					case "unitTop":
						data.result = data.value / 1000;
						break;
					case "unitBot":
						data.result = data.value * 100;
						break;
					default:
						data.result = data.value;
						break;
				}
				break;
			case "unitBot":
				switch (data.subUnitB) {
					case "unitTop":
						data.result = data.value / 10000;
						break;
					case "unitMid":
						data.result = data.value / 100;
						break;
					default:
						data.result = data.value;
						break;
				}
				break;
			default:
				data.result = data.value;
				break;
		}
	}
	// FOR VOLUME
	else if (data.unit === 'volume' && data.subUnitA != undefined && data.subUnitB != undefined) {
		// convert the value
		switch (data.subUnitA) {
			case "unitTop":
				switch (data.subUnitB) {
					case "unitMid":
						data.result = data.value * 1000;
						break;
					case "unitBot":
						data.result = data.value * 1000000;
						break;
					default:
						data.result = data.value;
						break;
				}
				break;
			case "unitMid":
				switch (data.subUnitB) {
					case "unitTop":
						data.result = data.value / 1000;
						break;
					case "unitBot":
						data.result = data.value * 10;
						break;
					default:
						data.result = data.value;
						break;
				}
				break;
			case "unitBot":
				switch (data.subUnitB) {
					case "unitTop":
						data.result = data.value / 1000000;
						break;
					case "unitMid":
						data.result = data.value / 10;
						break;
					default:
						data.result = data.value;
						break;
				}
				break;
			default:
				data.result = data.value;
				break;
		}
	}
	// display the result
	if(data.result != NaN && data.result != undefined){
		document.getElementById("result").innerHTML = data.result;
	}
	
}
