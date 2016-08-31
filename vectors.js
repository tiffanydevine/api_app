function Vector (x, y)  {
    this.x = x; 
    this.y = y; 
}

Vector.prototype.plus = function(vector) {
    var theX = this.x + vector.x;
    var theY = this.y + vector.y; 
    return {x: theX, y: theY};  
}


var vec_one = new Vector(3,4); 
var vec_two = new Vector(8,5); 

console.log(vec_one.plus(vec_two)); 



