//function word is gone in new JS

const first = () => {
	const greet = "hi";
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

// closures

// The above code is same as
// const newFunc = const second = () => {
// 		alert(greet);
// 	}