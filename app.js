var coolNumber = 3;

function changeTheText()
{
		document.getElementById('paragraphText').style.color = 'maroon';

		var changeTextVariable = document.getElementById('changeUserText').value;
		document.getElementById('paragraphText').innerHTML = changeTextVariable;
}


