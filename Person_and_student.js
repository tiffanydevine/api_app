'use strict'

function Person(name, age)  {
    this.name = name; 
    this.age = age; 
    this.describe = function() {
        console.log("Name: " + this.name + " Age: " + this.age); 
    }
}; 


function Student(name, age) {
    Person.call(this, name, age);
}

// Student.prototype = new Person(); 

Student.prototype.learn = function(subject) {
    this.subject = subject;
    console.log(this.name +  " just learned " + subject); 
}; 

var meStudent = new Student("T", 37); 
meStudent.learn("math"); 

