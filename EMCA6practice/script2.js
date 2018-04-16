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

//Closures -- A function ran, the function executed.
// It's never going to execute again but it's going
// to remember that there are references to those variables
// so the child scope always has access to the parent
//scope

//Currying

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a*b;
//always multiplyby5
const multiplyBy5 = curriedMultiply(5);

// Compose -- act of putting two functions together
// to form a third function where the output of
//one function is the input of the other

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

// here f == sum, g == sum, a == 5 and 
//f(g(a)) == f(sum(5)) == f(6) == 7

//AVOIDING SIDE EFFECTS, FUNCTIONAL PURITY.

// always follow
// input --> function --> return --> value.
//This create determinism (Just like DFA)