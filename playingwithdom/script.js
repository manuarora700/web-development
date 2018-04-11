var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");
button.addEventListener("click", function() {
	if(input.value.length > 0) {

		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";

	}
})

// listening for the keypress event
input.addEventListener("keypress", function(event) {
	// console.log(event.which)
	if(input.value.length > 0 && event.keyCode === 13) {

		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";

	}
})