// ADVANCED OBJECTS

// 1. Reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// 2. Context -- not the same as scope
function b() {
	let a = 4;
}

const object4 = {
	a: function() {
		console.log(this);
	}
}
//Context tells us where we are with reference to the object
// 3. Instantiation
//Making copy of an object
//and using it again 

class Player {
	constructor(name, type) {
		console.log(this);

		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);	
	}
}

class Wizard extends Player {
	constructor(name, type) {
		//anytime we extend, we must use super() to call the parent constructor
		super(name, type);
	}
	play() {
		console.log(`WEEEEEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard("Manu", "Healer");
const wizard2= new Wizard("Paaji", "Shooter");
wizard1.introduce();
wizard1.play();
// ECMAScript 7 functions


let hello = "Helloooooo";
console.log(hello.includes('o')); // true
 // .includes() applied on strings.
 //also used on arrays

 //Exponential operator

 const square = (x) => x**2; //** is power
 const cube = (y) => y**3 // cube

 //ES8 padding() in strings

 // .padStart()
 // .padEnd()

 var string1 = "turtle";
 console.log(string1.padStart(10));
 console.log(string1.padEnd(10));


 const fun = (a,
  			  b,
   			  c,
    		  d,) => {
 	console.log(a);
 }

 fun(1, 2, 3, 4,);

// Object.values
// Object.entries
// Object.keys
// Very important functions.

let obj = {
	username0: 'santa',
	username1: 'Rudolf',
	username2: 'Manu Arora'
}
//The key method
Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
	console.log(value);
})

Object.entries(obj).forEach(value => {
	console.log(value);
})

Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '');
})