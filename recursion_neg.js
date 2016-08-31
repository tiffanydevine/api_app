function isEven(number) {
    if (number < 0) {
        number = number * -1; 
    }
    if (number == 0) {
        return "even"; 
    } else if (number == 1) {
        return "odd"; 
    } else {
        //console.log(isEven(number-2)); 
        return isEven(number - 2); 
    }
}

console.log(isEven(-100)); 