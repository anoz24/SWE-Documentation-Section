/*
Three important points:
1- 
functions and variables are hoisted which means 
they are available before the execution phase actually starts

2- 
lexical scoping: 
a function which is in another function which means: 
function is written in another function and gets access to the scope of the outer function (parent function)

3- 
"this" variable is a variable that each and every execution context gets

*/


// Code in ES6

// let (block scope) vs var (function scope)
function addNumers(num1 , num2) {
	if (num1 > num2) {
		var age = 30;
	}

	console.log(age);
}
addNumers(5, 2)


// new features for strings
var str = 'ali';
console.log(`${str} is here`);


//loops in ES5 (maps and foreach)
/*
forEach() - executes a provided function once for each array element.
map() - creates a new array with the results of calling a provided
*/


//loops in ES6
// we can use break or continue statements
const boxes = [1990, 1968, 1980];

for (const cur of boxes) {
	console.log(cur);
}


// arrow function
const years = [1990];
let ages5 = years.map(el => 2020 - el);


function outer1(a, b) {
    function inner1() {
        return a + b;
    }
    console.log(inner1());
}
outer1(2, 3);


function outer(x, y) {
    function inner(a, b) {
        return a * b + x + y;
    }
    return inner(3, 4);
}

console.log(outer(2, 5));


var ahmed = {
	name: 'ahmed',
	yearOfBirth: 1990,
	calculateAge: function() {
		// "this" keyword in method refers to the object ahmed itself 
		console.log(this);

		function inner() {
			// "this" keyword in regular function refers to global object (window object)
			console.log(this);
		}
		inner();

		years.forEach(() => {
			// "this" keyword in arrow function refers to the surrounding scope 
			// refers to object ahmed
			console.log(this);
		});
	}
}

ahmed.calculateAge();


// classes
class Person6 {
	constructor(name) {
		this.name = name;
	}

	name6() {
		console.log(this.name);
	}
} 

// inheritance 
class Athlete6 extends Person6 {
	constructor(name, prizes) {
		super(name);
		this.prizes = prizes;
	}

	wonMedal() {
		this.prizes++;
		console.log(this.prizes);
	}

}

const aliAthlete = new Athlete6('ali', 5);

aliAthlete.wonMedal();
aliAthlete.name6();

//Java Script 
function add(a, b) {
    return a + b;
}
console.log(add(5, "10")); // Result: "510" (Wait, I wanted 15!)

//Type Script 
/*
function add(a: number, b: number): number {
    return a + b;
}
// TS Error: Argument of type 'string' is not assignable to parameter of type 'number'.
add(5, "10");
*/



//Fail soft and Fail Fast 
//2. The Danger of "Tolerance"
//The problem is that JavaScript's tolerance doesn't actually fix the error; it just hides it until it's too late.

//Imagine you are building a banking app:

JavaScript
function deposit(balance, amount) {
    return balance + amount;
}

// Someone accidentally passes the amount as a string "100"
deposit(1000, "100"); // Result: "1000100" 
//JavaScript didn't crash! It was "tolerant." But now the user has 1 million dollars instead of 1,100.

//In a large professional project with 50,000 lines of code, these "silent" bugs are a nightmare to find because the code doesn't break where the mistake happened—it breaks much later when that weird value causes a problem elsewhere.