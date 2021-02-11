//Convert a number to roman numerals

//romanNumeral = 'MLCL'; //1100

let romanNumeral = prompt("What Roman numeral would you like to translate to an integer? ");
let romanNumeralArray = romanNumeral.split('');
let integer = 0;

function romanToInt(romanNumeralArray){
	console.log(romanNumeralArray);
	console.log('-----------------------');
	let integerBuilder = [];

	for(let c = 0; c <= romanNumeralArray.length - 1; c++){
		//set values in a new array
		if(romanNumeralArray[c] === 'M'){integerBuilder.push(1000)};
		if(romanNumeralArray[c] === 'D'){integerBuilder.push(500)};
		if(romanNumeralArray[c] === 'C'){integerBuilder.push(100)};
		if(romanNumeralArray[c] === 'L'){integerBuilder.push(50)};
		if(romanNumeralArray[c] === 'X'){integerBuilder.push(10)};
		if(romanNumeralArray[c] === 'V'){integerBuilder.push(5)};	
		if(romanNumeralArray[c] === 'I'){integerBuilder.push(1)};
		console.log('our integer builder: ' + integerBuilder.join());
	}

	//build algorithm to calculate values
	let lastValue = integerBuilder[0];
	integer = lastValue; //store index 0 in integer we build, and previous value

	for(let x = 1; x <= integerBuilder.length - 1; x++){ //start at index 1
		integer += integerBuilder[x]; 
		if(lastValue < integerBuilder[x]){integer -= (lastValue * 2);} 
		lastValue = integerBuilder[x]; //100
	}
	console.log(integer + ' is the end result.');
}

romanToInt(romanNumeralArray); //run our function to translate