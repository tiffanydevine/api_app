// Complete 

function tdRange (start,end) {
    // takes 2 arguments (start, end)
    // return array that contains all numbers from start up to and including end 
    var rangeArray = []; 
    for (var i = start; i <= end; i++){
        rangeArray.push(i); 
    } 
    return rangeArray; 
}

function tdSum (tdArray) {
    // takes an array 
    // returns the sum of the array
    var tdArraySummed = 0; 
    for (var i = 0; i < tdArray.length; i++) {
        tdArraySummed += tdArray[i]; 
    }
    return tdArraySummed; 
}


console.log(tdSum(tdRange(1, 10)));
