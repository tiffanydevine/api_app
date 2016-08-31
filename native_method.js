String.prototype.repeatify = function(number) {
    this.number = number; 
    var a = ""; 
    for (var i=0; i < this.number; i++) {
        a += this; 
    }
   return a; 

}; 

var a = "h"; 
console.log(a.repeatify(6)); 
