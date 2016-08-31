/*
var weekDay; 
(function(exports){
    var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
    exports.name = function(number){
        return months[number]; 
    }; 
    exports.number = function(name){
        return months.indexOf(name); 
    }; 
})(this.dayOfMonth = {}); 

console.log(dayOfMonth.name(3)); 
*/ 


(function(exports) {
var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

exports.name = function(number) {
return names[number];
};
exports.number = function(name) {
return names.indexOf(name);
};
})(global.weekDay = {});



console.log(weekDay.name(weekDay.number("Saturday")));