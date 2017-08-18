//Global variables
var variableNumber = 2;  
var secondNumber = 3;
var variableName = 'Sam';
var secondString = 'This is ';

// Global variables are declared outside  function, and they can be accessed  in any function in the program. 
// Local variables are declared inside a function, and can be used(accessed) only inside that function.

function changeTheText(){
	//local variable
	var changeTextVariable = document.getElementById('changeUserText').value;
	document.getElementById('paragraphText').innerHTML = changeTextVariable;
}


