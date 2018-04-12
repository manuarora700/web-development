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

//a constant function that cannot be changed
const a = function() {
	console.log("Constant function \'a\'");
}


const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}

//here obj = 5 is illegal but obj.player = "Manu" is legal.

//in other words, property change of const is legal
//but we cannot change or reassign the variable of an object

//DESTRUCTURING

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;