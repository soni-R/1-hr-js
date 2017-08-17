var variableNumber = 2;
var secondNumber = 3;
var variableName = 'Sam';
var secondString = 'This is ';

function changeTheText(){
	
	document.getElementById('paragraphText').innerHTML = secondString + variableName;
}

function changeTheNumber(){
	
	document.getElementById('paragraphText2').innerHTML = secondNumber * variableNumber;
}
