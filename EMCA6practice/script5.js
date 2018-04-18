// consider a dummy problem

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
	(accumulator,array) => {
		// console.log('array', array);
		
		// console.log('accumulator', accumulator);
		debugger; //New function, freezes the function here
		return accumulator.concat(array)
	}, []);


//Javascript async await 
console.log('1');

setTimeout(() => {
	console.log('2');
}, 2000) //asynchronous programming 


//TRYING OUT BRANCHING, LITTLE FEATURE BRANCH