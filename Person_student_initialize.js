function Person()  {
    this.describe = function() {
        console.log("Name: " + this.name + " Age: " + this.age); 
    }
    this.initialize = function(name, age) {
        this.name = name; 
        this.age = age; 
    }
}; 

function Student() {
    this.learn = function(subject) {
        this.subject = subject;
        console.log(this.name +  " just learned " + subject); 
    }
}; 

Student.prototype = new Person();  
var meStudent = new Student();
meStudent.initialize("tiffany", 67); 
meStudent.learn("english"); 