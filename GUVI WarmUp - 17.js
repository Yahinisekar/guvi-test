/* Create a function to calculate the distance between two points defined by their x, y coordinates. */

function getDistance(x1, y1, x2, y2) {
	///Your code Starts here 
	
	
	let val1 = Math.pow(x2 - x1, 2);
	let val2 = Math.pow(y2 - y1, 2);
	let distance = parseInt(Math.sqrt(val1 + val2))
	return distance;
	
	
	///Your code Ends here
}
/*
Lines For TestCase

getDistance(100, 100, 400, 300);
getDistance(1,2,4,6);
*/