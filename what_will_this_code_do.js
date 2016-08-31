var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

// Aurelio De Rosa (here this refers to prop)
console.log(obj.prop.getFullname());

// Here this refers to the global variable this?
var test = obj.prop.getFullname;


console.log(test);