function isEven(number) {
    if (number == 0) {
        return "even"; 
    } else if (number ==1) {
        return "odd"; 
    } else {
        return isEven(number - 2); 
    }
}

console.log(isEven(99)); 