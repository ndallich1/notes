// typical function
function myfunc() {
  //some code that does something
}

// function call
myfunc();

//-------------------------------------------------

// x is a function parameter
function myfunc(x) {
  //some code that does something
}
// function call
myfunc();

//-------------------------------------------------

// a & b are function parameters
function addStuff(a, b) {
  c = a + b;
  return c;
}

let x = addStuff(2, 3); // function call will now be treated like an expression because we returned c

let x = 5; // function expression

let y = 4 + 7; // this is an expression

//-------------------------------------------------

(student) => student.passing; // this is a complete function because arrow functions are ridiculous

allStudents.filter((student) => student.passing); // filter method expects to be passed a function 
