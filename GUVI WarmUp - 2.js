/* Fill in your code that takes an number minutes and converts it to seconds. */

function toSeconds(min) {
	///Your code Starts here 
	
	
	if (typeof min === "number" && min > 0) {
		min = min * 60;
		return min;
	}
	
	
	///Your code Ends here
}
/*
Lines For TestCase

toSeconds(5);
toSeconds(3);
toSeconds(2);
*/