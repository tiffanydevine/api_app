function tdArgs () {
    var numArray = []; 
    for (var i=0; i < arguments.length; i++) {
        if (typeof arguments[i] === "number") {
            numArray.push(arguments[i]); 
        } else {
            console.log(arguments[i]); 
        }
    }
    return numArray;     
}
console.log(tdArgs("hello", "thing", 7,8,9)); 

// console.log(typeof 37 === "number"); 
