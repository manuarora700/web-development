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

const player2 = obj.player;
const experience3 = obj.experience;
let wizardLevel4 = obj.wizardLevel;

//THis is the long way

//Let's look at the shorter way

const {player5, experience6} = obj;
let {wizardLevel7} = obj;

//Much cleaner code

const name = "john Snow";
const obj2 = {
	[name]: 'Hello',
	[1 + 2]: 'hihi'
}

//Here we can have something dynamic like name property here
// using square braces

const abc = "Simon";
const cde = true;
const c = {};

const obj3 = {
	abc: abc,
	cde: cde,
	c: c
}

//This is the older way of assigning values

//the new way is that if the variable names are the same
//Then we just do

const obj4 = {abc, cde, c}

//Template strings
const name2 = "Sally";
const age =34
const pet = "horse";
// const greeting = "Hello" + name + "You seem to be doing" + greeting + "!";

//This is tedious.

//We now do it this way

const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;

//Default arguments
let greetingBest2 = "";
function greet(name='', age=30, pet='Cat') {
	return greetingBest2 = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
	//In the parenthesis are default arguments
}

//Symbol --- Not used very often

let symbol1 = Symbol();
let symbol2 = Symbol('foo');
let symbol3 = Symbol('foo');

//Creates unique types

//The best one, arrow functions

function add(a,b) {
	return a+b;
}

//This is huge code. The simple syntax is

const add2 = (c,d) => c+d;

//above and below are the same