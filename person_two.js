function Person (name, age) {
	this.name = name; 
	this.age = age; 
	this.describe = funciton(){
		console.log("Name: " + this.name + " Age: " + this.age); 
	}
}

function Student(name, age) {
	Person.call(this, name, age); 
}

