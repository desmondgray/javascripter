/**
 * 
 */
function Calculator() {
	var counter = 0;
	var size = prompt("Please enter size of array: ", 5);
	alert("The array size is ${size} ");
	var array = [];
	while (counter < size) {
		array.concat(prompt("Please enter the value you would like to be added"));
		counter++;
	}
}

/**
 * 
 */
function addArray(array) {
	var add = 0;
	var string = "";
	if (array.length > 0) {
		for (var value = 0; value < array.length; value++) {
			add += array[value];
		}
		string = "The total is %.2f" % (add);
	}
	return string;
}

var first = new Calculator();
document.write(addArray(first.array));
//
//
///**
// * 
// */
//function Calculator() {
//	var counter = 0;
//	var size = prompt("Please enter size of array: ", 5);
//	alert("The array size is ${size} ");
//	tharray = [];
//	while (counter < size) {
//		array.concat(prompt("Please enter the value you would like to be add"));
//		counter++;
//	}
//}
//
///**
// * 
// */
//function addArray(array) {
//	var add = 0;
//	var string = "";
//	if (array.length > 0) {
//		for (var value = 0; value < array.length; value++) {
//			add += array[value];
//		}
//		string = "The total is %.2f" % (add);
//	}
//	return string;
//}
//
//var first = new Calculator();
//document.write(addArray(first.array));
