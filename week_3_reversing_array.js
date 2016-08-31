function reverseArray (tdArray) {
    // take array as an arguement 
    // return new array that has elements in inverse order. 
    var newArray = []; 
    for (var i = 0; i <= tdArray.length  - 1; i++) {
        newArray.unshift(tdArray[i]); 
    }
    return newArray; 
}

console.log(reverseArray([1,2,3,4])); 