function isPrime(number) {
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

console.log(isPrime(23)); 
