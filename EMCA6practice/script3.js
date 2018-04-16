const array = [1, 2, 13, 11];

//for
//foreach
//while
const double = [];
const newArray = array.forEach((num) => {
	double.push(num * 2);
})

console.log('ForEach', double);

//We are going to look at
//map, filter and reduce functions

//Most important methods that we are going to use.

//With map we can simply do the above task as


const mapArray = array.map(num => {
	return num * 2; //Always have to return
});

console.log('map', mapArray);
//Simple loop -- use MAP over forEach
//MAP always returns something, foreach just iterates.
//FILTER

const filterArray = array.filter(num =>  {
	return num > 5;
})
console.log('filter', filterArray);