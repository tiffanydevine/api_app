function deepEqual(value1, value2) {
    // INCOMPLETE
    // that takes two values 
    // returns true if they are the same value 
    // returns true if they are objects with the same properties whose values are also equal (use recursive call of deep equal)
    // To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".
    
    if (typeof value1 === "object") {
        /*
        recursive call to deepEqual to run through proper 
        if (value1 === value2) {
            console.log('hello')
        } else {
            console.log('elsed')
        }
        */
     
    } else {
        console.log("not a num")
    }
}

var a = 7
var b = 7
deepEqual(a,b); 