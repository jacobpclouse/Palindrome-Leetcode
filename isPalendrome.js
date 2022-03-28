// -- Overview --
// test if a array of nums is a palendrome
// need to compair corrosponding characters from array (ie: first char with last, second char with second last, etc)
// incriment and decriment until we eval all chars, use '<' as it will work with odd length strings and even length strings


function isPalen(inputArray) {
	// storing length of array
	arrayLength = inputArray.length
	
	// starting index (incriment this)
	startIndex = 0
	
	// ending index (decriment this)
	endIndex = arrayLength - 1
	
	// flag - not a palendrome (turn to false if not a palendrome)
	isArrayAPalendrome = true
	
	while (startIndex < endIndex) {
	
		// if this is not a palendrome, then break and set flag
		if (inputArray[startIndex] != inputArray[endIndex]){
			isArrayAPalendrome = false
			break
		}
		
		// incriment start index, decriment end index
		startIndex++
		endIndex--
	}	

	
	// return to user if array is palendrome
	if (isArrayAPalendrome == true){
		console.log("Array is a Palendrome")
	} else {
		console.log("Array is NOT a Palendrome")
	}
	
	return isArrayAPalendrome
	
}

// sample arrays
array1 = [1, 2, 3, 3, 2, 1]
array2 = [1, 2, 3, 4, 3, 2, 1]
array3 = [1, 2, 3, 33, 2, 1]
array4 = [1, 23, 3, 4, 3, 2, 1]
array5 = ['z', 2, 'q', 'q', 2, 'z']
array6 = [1, 't', 3, 4, 'u', 't', 1]

// testing data
isPalen(array1)
isPalen(array2)
isPalen(array3)
isPalen(array4)
isPalen(array5)
isPalen(array6)
