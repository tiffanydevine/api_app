function min (a, b) {
    if (a > b) {
        return b; 
    } else if (b > a) {
        return a; 
    } else {
        return "a and b are equal"; 
    }
}; 

console.log(min(4,5)); 
console.log(min(4,4)); 
console.log(min(3,4)); 