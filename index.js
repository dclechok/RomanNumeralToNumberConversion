//Convert a number to roman numerals

romanNumeral = 'MCLI'; //1151

// let romanNumeral = prompt("What Roman numeral would you like to translate to an integer? ");
let romanNumeralArray = romanNumeral.split('');

function romanToInt(romanNumeralArray){
	console.log(romanNumeralArray);
	console.log('-----------------------');
	let integerBuilder = [];

	for(let c = 0; c <= romanNumeralArray.length - 1; c++){
		//build algorithm
		if(romanNumeralArray[c] === 'M'){integerBuilder.push(1000)};
		if(romanNumeralArray[c] === 'D'){integerBuilder.push(500)};
		if(romanNumeralArray[c] === 'C'){integerBuilder.push(100)};
		if(romanNumeralArray[c] === 'L'){integerBuilder.push(50)};
		if(romanNumeralArray[c] === 'X'){integerBuilder.push(10)};
		if(romanNumeralArray[c] === 'V'){integerBuilder.push(5)};	
		if(romanNumeralArray[c] === 'I'){integerBuilder.push(1)};

		
	}
	console.log('our integer builder: ' + integerBuilder.join());

}

romanToInt(romanNumeralArray); //run our function to translate