// let and const

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true;
	console.log("inside", wizardLevel);
}

console.log("outside", wizardLevel);

// here wizardLevel is still false b/c of let

//with variable we can create a scope inside of a function

//with let , anytime if there are curly braces, let creates
// a scopr. this is not the same with var

// from now on we won't use var but we'll user let

//we cannot change constants (const) to another

// for example 'bobby' cannot be changed to 'Manu'
// by typing player = "Manu"