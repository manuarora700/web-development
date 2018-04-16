const array = [1, 2, 13, 11];

//for
//foreach
//while
const double = [];
const newArray = array.forEach((num) => {
	double.push(num * 2);
})

console.log(double);

//We are going to look at
//map, filter and reduce functions

//Most important methods that we are going to use.

//With map we can simply do the above task as


const mapArray = array.map((num) => {
	return num * 2; //Always have to return
})

console.log(mapArray);