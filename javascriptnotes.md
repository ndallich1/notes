# Conditional Statements

- [Conditional Statements](https://www.codecademy.com/courses/introduction-to-javascript/lessons/control-flow/exercises/control-flow-intro) are an if-else decision.
- They check for a specific condition(s) and perform a task based on the condition(s).

## if Statement:

```js
if (true) {
  console.log("This message will print!");
}
// Prints: This message will print!
```

- The "if" keyword is followed by a set of parentheses () which is followed by a code block, or block statement, indicated by a set of curly braces {}.
- Inside the parentheses (), a condition is provided that evaluates to true or false.
- If the condition evaluates to true, the code inside the curly braces {} runs, or executes.
- If the condition evaluates to false, the block won’t execute.

## if else Statement

```js
if (false) {
  console.log("The code in this block will not run.");
} else {
  console.log("But the code in this block will!");
}
// Prints: But the code in this block will!
```

- Uses the else keyword following the code block of an if statement.
- Has a code block that is wrapped by a set of curly braces {}.
- The code inside the else statement code block will execute when the if statement’s condition evaluates to false.
- if...else statements allow us to automate solutions to yes-or-no questions, also known as **binary decisions**.

## else if Statement

```js
let stopLight = "yellow";

if (stopLight === "red") {
  console.log("Stop!");
} else if (stopLight === "yellow") {
  console.log("Slow down.");
} else if (stopLight === "green") {
  console.log("Go!");
} else {
  console.log("Caution, unknown!");
}
// Prints: Slow down. (since stoplight = 'yellow')
```

- an else if statement allows for more than two possible outcomes. - you can add as many else if statements as you'd like, to make more complex conditionals. - the else if statement always comes after the if statement and before the else statment. - the else if statment also takes a condition. See syntax above!

# Comparison Operators

- [Comparison Operators](https://www.codecademy.com/courses/introduction-to-javascript/lessons/control-flow/exercises/comparison-operators) compare the value on the left with the value on the right.

For instance:

```js
10 < 12; // Evaluates to True
```

Comparison operators include:

- Less than: <
- Greater than: >
- Less than or equal to: <=
- Greater than or equal to: >=
- Is equal to: === // This is the identity operator!
- Is not equal to: !==

# Logical Operators

- these are included in conditional statements
- these are operators that work with boolean values (true or false)
- these are often used in conditional statements to add another layer of logic to our code

Logical Operators include:

- the and operator (&&)

  - both values MUST evaluate to true
  - if either condition is false, the && condition will evaluate to false and the else block will execute.

- the or operator (||)

  - only one of the conditions must evaluate to true and the block will execute
  - if the first condition is true, the second condition will not even be evaluated

- the not operator, otherwise known as the bang operator (!)

  - this operator reverses, or negates, the value of a boolean.
  - the ! will either take a true value and pass back false, or it will take a false value and pass back true.

# Truthy and Falsy

- [Truthy and Falsy](https://www.codecademy.com/courses/introduction-to-javascript/lessons/control-flow/exercises/true-false-values) are included in conditional statements
- consider how non-boolean data types, like strings or numbers, are evaluated when checked inside a condition.
- use these when you want to check if a variable exists and you won't necessarily want it to equal a certain value - you'll only want to check to see if the variable has been assigned a value.
- if you define a variable, the code block in the following if statement will run if a variable has a truthy value
- even if the value of the variable may not explicity be the value of true when used in a boolean or conditional context, it will evaluate to true if it has been assigned a non-falsy value.

So, which values are falsy, and evaluate to false when checked as a condition? See below:

- 0
- empty strings like "" or ''
- null (which represents there is no value at all)
- undefined (which represents when a declared variable lacks a value)
- NaN (not a number)

- Short-Circuit Evaluation

  - defining a variable by using a logical operator like this:

```js
let username = "";
let defaultName = username || "Stranger";
console.log(defaultName); // Prints: Stranger
```

# Ternary Operators

- The ternary operator allows for a compact syntax in the case of binary (choosing between two choices) decisions.
- It accepts a condition followed by a ? operator, and then two expressions separated by a :
- If the condition evaluates to truthy, the first expression is executed, otherwise, the second expression is executed.

# Switch Statement

- A [Switch Statement](https://www.codecademy.com/resources/docs/javascript/switch?page_ref=catalog) evaluates an expression and allows different blocks of code to execute depending on the result of that expression.

```js
let groceryItem = "papaya";

switch (groceryItem) {
  case "tomato":
    console.log("Tomatoes are $0.49");
    break;
  case "lime":
    console.log("Limes are $1.49");
    break;
  case "papaya":
    console.log("Papayas are $1.29");
    break;
  default:
    console.log("Invalid item");
    break;
}
// Prints 'Papayas are $1.29'
```

- the switch keyword initiates the statement and is followed by () which contains the value or expression that each case will compare. In the example above, groceryItem is the expression.
- inside the code block {}, there are multiple cases. The case keyword checks if the expression matches the specified value that comes after it.
- the break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block.
- at the end of the switch statement, there is a default statement.

# Functions

- A [function](https://www.codecademy.com/courses/introduction-to-javascript/lessons/functions/exercises/intro-to-functions) is a reusable block of code that groups together a sequence of statements to perform a specific task.

## Function Declaration

- A [function declaration](https://www.codecademy.com/courses/introduction-to-javascript/lessons/functions/exercises/function-declaration) binds a function to a name (or identifier), just like how a variable declaration binds a value to a variable name.
- Function Declaration Anatomy: ![function declaration anatomy](function%20declaration%20anatomy.jpg)
- a function declaration consists of:
  - the "function" keyword.
  - the name of the function, or its identifier, followed by parentheses.
  - a function body, or the block of statements required to perform a specific task, enclosed in the function's curly brackets {}.

## Parameters & Arguments

- When declaring a function, we can specify its parameters. Parameters allow functions to accept inputs and perform a task using the inputs.
- Parameters can be used as placeholders for information that will be passed to the function when it is called.
  ![Function Parameters](function%20parameters.jpg)
  - In the diagram above, calculateArea() computes the area of a rectangle, based on two inputs (width and height).
  - The parameters are specified between the parenthesis as width and height, and inside the function body, they act just like regular variables.
  - Width and height act as placeholders for values that will be multiplied together.
- When calling a function that has parameters, we specify the values in the parentheses that follow the function name. The values that are passed to the function when it is called are called arguments.
- Arguments can be passed to the function as values or variables.
  ![Function Arguments](function%20arguments.jpg)

  - In the function call above, the number 10 is passed as the width and 6 is passed as the height. Notice that the order in which arguments are passed and assigned follows the order that the parameters are declared.
    ![Function Arguments as Variables](function%20arguments%20as%20variables%20.jpg)
  - The variables recWidth and recHeight are initialized with the values for the height and width of a rectangle before being used in the function call.

- By using parameters, calculateArea() can be reused to compute the area of any rectangle!

## Default Parameters

- One of the features added in ES6 is the ability to use [default parameters](https://www.codecademy.com/courses/introduction-to-javascript/lessons/functions/exercises/default-parameters).
- Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.

```js
function greeting(name = "stranger") {
  console.log(`Hello, ${name}!`);
}

greeting("Nikki"); // Output: Hello, Nikki!
greeting(); // Output: Hello, stranger!
```

- In the example above, we used the = operator to assign the parameter name a default value of 'stranger'. This is useful to have in case we ever want to include a non-personalized default greeting!
- When the code calls greeting('Nikki') the value of the argument is passed in and, 'Nikki', will override the default parameter of 'stranger'.
- When there isn't an argument passed into greeting(), the default value of 'stranger' is used, and 'Hello, stranger!' is logged to the console.
- By using a default parameter, we account for situations when an argument isn't passed into a function that is expecting an argument.

## Function Return

- When a function is called, the computer will run through the function's code and evaluate the result of calling the function.
- By default, that resulting value is undefined.

```js
function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)); // Prints undefined
```

- In the example above, we defined out function to calculate the area of a width and height parameter. Then, rectangleArea() is invoked with the arguments 5 & 7. But, when we went to print the results, the console logged 'undefined'.
  - Did we write the function wrong? No!
  - The function worked just fine, and the computer calulcated the area as 35, but we just didn't capture it.
  - this is where 'return' comes in!
    ![function return](function%20return.jpg)
- To pass back information from the function call, we use a [return statement](https://www.codecademy.com/courses/introduction-to-javascript/lessons/functions/exercises/return).
- To create a return statement, we use the return keyword followed by the value that we wish to return. Like we saw above, if the value is omitted, undefined is returned instead.
- When a return statement is used in a function body, the execution of the function is stopped and the code that follows it will not be executed. See this example:

```js
function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return "You need positive integers to calculate area!";
  }
  return width * height;
}
```

- The second return statement 'return width \* height;' will not run.

- The return keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use.

# [Helper Functions](https://www.codecademy.com/courses/introduction-to-javascript/lessons/functions/exercises/return-ii)

- These are functions being called within another function. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

```js
function multiplyByNineFifths(number) {
  return number * (9 / 5);
}

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}

getFahrenheit(15); // Returns 59
```

- In the example above:

  - getFahrenheit() is called and 15 is passed as an argument.
  - The code block inside of getFahrenheit() calls multiplyByNineFifths() and passes 15 as an argument.
  - multiplyByNineFifths() takes the argument of 15 for the number parameter.
  - The code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), which evaluates to 27.
  - 27 is returned back to the function call in getFahrenheit().
  - getFahrenheit() continues to execute. It adds 32 to 27, which evaluates to 59.
  - Finally, 59 is returned back to the function call getFahrenheit(15).

- We can use functions to section off small bits of logic or tasks, then use them when we need to. Writing helper functions can help take large and difficult tasks and break them into smaller and more manageable tasks.

# Document Methods

## querySelector(selectors)

- This will return the first element within the document that matches the specified selector or group of selectors.
- If no matches are found, "null" is returned.
- selectors are a string containing one or more selectors to match. This string must be a valid CSS selector string; if it isn't, a "SyntaxError" exception is thrownquerySelector(selectors)

## Loops

- A [loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) is a sequence of instructions that is repeated until a certain condition is met
- Loops offer a quick and easy way to do something repeatedly
- There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times (it is possible that number could be zero!)
- The various loop mechanisms offer different ways to determine the start and end points of the loop. There are various situations that are more easily served by one type of loop over the others.

for statement

```js
for ([initialExpression]; [conditionExpression]; [incrementExpression]) {
statement
```

- a for loop repeats until a specified condition evaluates to false

- This is what happens when a for loop is ran:
  1. the initializing expression [initialExpression] if any, is executed
  2. the [conditionExpression] is evaluated. If the value is true, the loop statement executes. Otherwise, the for loop will terminate. If [conditionExpression] is omitted entirely, the condition is assumed to be true.
  3. the [statement] executes. The statement must be inside a code block ({})!
  4. THEN the update expression, or [incrementExpression] is executed
  5. the pointer will then return to step 2 and loop as many times as the [incrementExpression] calls out

## while Statement (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

```js
while (condition) statement;
```

- a while loop executes its statements as long as a specified condition evaluates to true. - if the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop

- the condition test occurs before the statement in the loop is executed - if the condition returns true, statement is executed and the condition is tested again. - if the condition returns false, execution stops, and control is passed to the statement following while - to execute multiple statements, use a code block ({}) to group those statements - see example below:

```js
  let n = 0;
  let x = 0;
  while (n < 3) {
  n++; 0 + 1 = 1 1 + 1 = 2 2 + 1 = 3
  x += n; 0 + 1 = 1 1 + 2 = 3 3 + 3 = 6
  }
```

# DOM

- the browser controls the DOM

# APIs

- [API](<(https://blog.postman.com/intro-to-apis-what-is-an-api/)>) = Application Programming Interface
- APIs are little pieces of code that make it possible for digital devices, software apps, and data servers to talk with each other, and they are the essential backbone of a lot of services we rely on now.
- API Integration
  - the connection between two or more applications/programs/services/systems, using APIs
- What are APIs used for?
  - they power desktop apps
  - they are behind most web applications
  - they make mobile applications possible
  - they are the integrations for no code solutions
  - they connect devices to the internet
- How do APIs work?
  - they share data and info between apps, systems, and devices
- Internal APIs
  - private and only used by your team, department, company, or org.
- External API
  - public or open APIs - publicly available for anyone to use

# jQuery

- this is an API

# Third-Party APIs

- we can do lots of stuff with third-party APIs

# Server-Side APIs

- Client-Server Model - a distributed application structure that partitions task or workload between the providers of a resource or service, called servers, and service requesters called clients.

  1. Client computer sends a request for data to the server through the internet.
  2. Server accepts the requested process
  3. Server delivers data packets back to client

  - examples of the client-server model are:

    - Email
    - World Wide Web

  - Client: a computer (Host) that is capable of receiving information or using a particular service from the service providers (Servers)

  - Server:

    - web applications live on these! (they are like specialized computers that live on the internet)

  - Every APIs documentation is going to be different. READ IT CAREFULLY
  - Be mindful of error messages
  - Google error messages

  - How are requests transferred to and from the server?
    - HTTP!! Hypertext Transfer Protocol
      - a set of rules and regulations for how data can be requested by a client and how a server can respond to that request

- JSON (JavaScript Object Notation) - with this, we can:

  - retrieve weather data in our app
  - display google maps in our app

- [Fetch!](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

  - This is basically parsing the data into JSON, and then writing the links to the screen

  ```js
  fetch(requestUrl).then(function (response) {
    return response.json(); //this spits back a real workable javascript object  (data)
  });
  ```

  - if a function returns a Promise, use .then

- There is more than one way to request data from a server-side API.
  - An XMLHttpRequest was the predecessor to fetch.
  - AJAX is another alternative to fetch. AJAX requests require the use of the third-party library, jQuery, to work.
