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
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);	
	}
}

