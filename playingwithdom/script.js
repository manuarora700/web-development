var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}

function addListAfterClick() {
	
	if(inputLength() > 0) {

		createListElement();

	}
}

function addListAfterKeypress(event) {
	
	// console.log(event.which)
	if(inputLength() > 0 && event.keyCode === 13) {

		createListElement();

	}
}
button.addEventListener("click", addListAfterClick);

// listening for the keypress event
input.addEventListener("keypress", addListAfterKeypress);