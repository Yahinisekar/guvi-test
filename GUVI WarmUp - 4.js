/* Create a function that takes a number as an argument, increments the number by +1 and returns the result. */

function nextNumber(myint) {
	///Your code Starts here 
	
	
	if (typeof myint === "number") {
		let num = myint + 1;
		return num;
	}
	
	
	///Your code Ends here
}
/*
Lines For TestCase

nextNumber(0);
nextNumber(9);
nextNumber(-3);
*/