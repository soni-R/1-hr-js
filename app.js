function changeTheText(){
	work();
}

function work(){
	var changeTextVariable = document.getElementById('changeUserText').value;
	document.getElementById('paragraphText').innerHTML = changeTextVariable;
}

