
function countBs(stringy) {
    stringy = stringy.toUpperCase(); 
    var bCount = 0; 
    for (var i = 0; i <= stringy.length - 1; i++ ){
        if (stringy[i] === "B") {
            bCount += 1; 
        }
    }; 
    return bCount; 
};

function countChar(stringy, chary) {
    stringy = stringy.toUpperCase(); 
    chary = chary.toUpperCase(); 
    var charyCount = 0; 
    for (var i = 0; i <= stringy.length - 1; i++ ){
        if (stringy[i] === chary) {
            charyCount += 1; 
        }
    }; 
    return charyCount; 
};






console.log(countBs("hebbo")); 
console.log(countChar("hebbo", "b")); 