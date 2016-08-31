/*
INCOMPLETE

Remember the data structure we made earlier for Trimet stuff? 
Let’s redo our structure a bit now that we have more tools. 
Earlier, you made a single structure to represent all active vehicles. 
Now, create a constructor function for one vehicle. It should create a 
new vehicle when we call it with new Vehicle and pass in our different attributes 
from earlier tonight. Create a few vehicles.
Great! You have some vehicles. But what if we want to add something to all of them? 
Modify your prototype to include a property that gives us some basic information: city, 
state, and the name of our agency (Trimet). Add a method to the prototype that 
will print out the type, line, and location any of our vehicles.
Now, our vehicles also move around. Add a method to the prototype that when 
called will update the latitude and longitude. Call this method on a few vehicles.
*/

function Vehicle (id, lattitude, longitude, speed, full, minutesOffSchedule) {
    this.id = id;  
    this.lattitude = lattitude; 
    this .longitude = longitude; 
    this.speed = speed; 
    this.full = full; 
    this.minutesOffSchedule = minutesOffSchedule; 
}

var bus = new Vehicle(123,40.2,45.2.37,true, 99); 
var streetCaro = new Vehicle(143,44.2,44.2.37,true, 49); 

