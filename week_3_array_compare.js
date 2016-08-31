function tdArrayCompare (array) {
    var theArray = arguments[0]; 
    var parametersIncluded = []; 
    for (var i=1; i<= arguments.length - 1; i++) {
        if (theArray.indexOf(arguments[i]) != -1) {
            parametersIncluded.push(arguments[i]); 
        }
    } 
    return parametersIncluded; 
}
console.log(tdArrayCompare(["the", "thing", 7,8,9], "the", 8, "other", 6)); 
