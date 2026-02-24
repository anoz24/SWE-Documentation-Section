// --- ES5 JavaScript Practice ---

// 1. Variable Declaration and Initialization
var firstName = 'Ali';
var age = 28;

// Type Coercion: JS converts the number to a string to join them
console.log(firstName + ' ' + age);

// 2. Basic Operators
var year = 2026; // Updated to current year
var yearAhmed = year - 28;
console.log('Ahmed was born in: ' + yearAhmed);

var x = 2;
x += 1;
x++;
++x;
console.log('Value of x: ' + x);
console.log('Type of yearAhmed: ' + typeof yearAhmed);

// 3. If / Else Statements
var currentAge = 30;
if (currentAge >= 20) {
    console.log('Age is larger than or equals 20');
} else if (currentAge === 15) {
    console.log('Age equals 15');
} else {
    console.log('Otherwise');
}

var isMarried = true;
if(isMarried) {
    console.log('Marriage status: Married');
}

// Ternary Operator
var ageAhmedStatus = currentAge > 20 ? 'Yes, over 20' : 'No';
console.log('Is Ahmed over 20? ' + ageAhmedStatus);

// 4. Functions
// Renamed to avoid "Hoisting" conflicts with the other calculateAge function
function getAgeFromYear(birthYear) {
    return 2026 - birthYear;
}
console.log('Calculated Age: ' + getAgeFromYear(1990));

// Function Expression
var calcAgeExpression = function(birthYear) {
    return 2026 - birthYear;
};
console.log('Expression Age: ' + calcAgeExpression(1990));

// 5. Arrays
var names = ['Ahmed', 'Ali', 1996, true]; 
console.log('First Name in Array: ' + names[0]);
console.log('Array Length: ' + names.length);
names[1] = 'Ben'; // Updates 'Ali' to 'Ben'

// 6. Objects & Methods
var hossam = {
    firstName: 'Hossam',
    lastName: 'Saad',
    birthYear: 1996,
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        // "this" refers to the hossam object
        return 2026 - this.birthYear;
    }
};
console.log('Hossam Age: ' + hossam.calcAge());

// 7. Loops
console.log('Starting Loop:');
for (var i = 0; i < 5; i++) {
    if(i === 2) {
        console.log('Skipping 2 using "continue"');
        continue; // Use 'continue' to skip, 'break' to stop entirely
    }
    console.log('Loop Index: ' + i);
}

// 8. Execution Context & Hoisting
var lastName = 'ali';
// In browsers, global variables are attached to the 'window' object
if(lastName === window.lastName){
    console.log('Global Context Match: Yes');
}

// 9. Scoping and "this" (The Fix)
var ahmed = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log('Outer "this" refers to object:', this);

        // To use "this" inside a sub-function in ES5, we store it in a variable
        var self = this; 

        function inner() {
            // "this" inside a normal function points to the Window
            // We use "self" to point back to the 'ahmed' object
            console.log('Inner Function Name Access: ' + self.name);
        }
        inner();
    }
};

ahmed.calculateAge();

