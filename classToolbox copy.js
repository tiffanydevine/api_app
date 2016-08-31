(function(exports) {
    
    exports.isEven = function isEven(number) {
            if (number < 0) {
                number = number * -1; 
            }
            if (number == 0) {
                return "even"; 
            } else if (number == 1) {
                return "odd"; 
            } else {
                //console.log(isEven(number-2)); 
                return exports.isEven(number - 2); 
            } 
        }; 
    exports.isPrime = function isPrime(number) {
        if (number === 2) {
            return true; 
        } else if (number < 2) {
            return false; 
        }
        for (var i = 2; i <= number/2 ; i++) {
            if (number%i === 0) {
                return false; 
            } else {
                return true; 
            }
        }
    }; 
    exports.min = function min (a, b) {
            if (a > b) {
                return b; 
            } else if (b > a) {
                return a; 
            } else {
                return "a and b are equal"; 
            }
        }; 
    exports.reverseArray = function reverseArray(tdArray) {
        var newArray = []; 
        for (var i = 0; i <= tdArray.length  - 1; i++) {
            newArray.unshift(tdArray[i]); 
        }
        return newArray; 
    };     
    exports.compareArrays = function tdArrayCompare (array) {
        var theArray = arguments[0]; 
        var parametersIncluded = []; 
        for (var i=1; i<= arguments.length - 1; i++) {
            if (theArray.indexOf(arguments[i]) != -1) {
                parametersIncluded.push(arguments[i]); 
            }
        } 
        return parametersIncluded; 
    }; 
    exports.rangePrint = function tdRange (start,end) {
        // takes 2 arguments (start, end)
        // return array that contains all numbers from start up to and including end 
        var rangeArray = []; 
        for (var i = start; i <= end; i++){
            rangeArray.push(i); 
        } 
        return rangeArray; 
    }; 
    exports.sumArray = function tdSum (tdArray) {
        // takes an array 
        // returns the sum of the array
        var tdArraySummed = 0; 
        for (var i = 0; i < tdArray.length; i++) {
            tdArraySummed += tdArray[i]; 
        }
        return tdArraySummed; 
    }; 

})(typeof(window) === "object"? window.toolbox = {} : global.toolbox = {}); 

console.log(toolbox.sumArray([1,2,3,4])); 
    
// (typeof(window) === "object"? window.toolbox = {} : global.toolbox = {}); 