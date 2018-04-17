// consider a dummy problem

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
	(accumulator,array) => {
		// console.log('array', array);
		
		// console.log('accumulator', accumulator);
		debugger; //New function, freezes the function here
		return accumulator.concat(array)
	}, []);