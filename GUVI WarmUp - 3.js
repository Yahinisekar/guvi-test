/* Create a function that takes a string and returns it as an integer. */

function toInteger(mystr) {
	///Your code Starts here 
	
	
	if (typeof mystr === "string") {
		
		let mynum = parseInt(mystr)
		return mynum;
	}
	
	
	///Your code Ends here
}
/*
Lines For TestCase

toInteger("6");
toInteger("1000");
toInteger("12");
*/