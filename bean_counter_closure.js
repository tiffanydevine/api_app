function countChar(stringy) {
    return function(chary) {
        stringy = stringy.toUpperCase(); 
        chary = chary.toUpperCase(); 
        var charyCount = 0; 
        for (var i = 0; i <= stringy.length - 1; i++ ){
            if (stringy[i] === chary) {
                charyCount += 1; 
            }; 
        }; 
        return charyCount; 
    };
}; 

var countAllBs = countChar("hebbo"); 
console.log(countAllBs("b"));  