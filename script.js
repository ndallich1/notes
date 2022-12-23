{/* Conditional Statements (https://www.codecademy.com/courses/introduction-to-javascript/lessons/control-flow/exercises/control-flow-intro)
  - They are an if-else decision. 
  - They check a specific condition(s) and perform a task based on the condition(s).
  - if statement */

    if (true) {
      console.log('This message will print!'); 
    }
    // Prints: This message will print!

/*  - The if keyword followed by a set of parentheses () which is followed by a code block, or block statement, indicated by a set of curly braces {}.
    - Inside the parentheses (), a condition is provided that evaluates to true or false.
    - If the condition evaluates to true, the code inside the curly braces {} runs, or executes.
    - If the condition evaluates to false, the block won’t execute. 

  - if else statement  */
  
    if (false) {
      console.log('The code in this block will not run.');
    } else {
      console.log('But the code in this block will!');
    }
    
    // Prints: But the code in this block will!

/*  - Uses the else keyword following the code block of an if statement.
    - Has a code block that is wrapped by a set of curly braces {}.
    - The code inside the else statement code block will execute when the if statement’s condition evaluates to false.
    - if...else statements allow us to automate solutions to yes-or-no questions, also known as binary decisions.

  - else statement  */
}

{ /* Comparison Operators 

}

  - logical operators

  - truthy vs falsy values 

  - ternary operators y

  - switch statement 





{/* Document Methods

  querySelector(selectors)
  - This will return the first element within the document that matches the specified selector or group of selectors.
  - If no matches are found, "null" is returned.
  - selectors are a string containing one or more selectors to match. This string must be a valid CSS selector string; if it isn't, a "SyntaxError" exception is thrownquerySelector(selectors) */
}

{/* Loops (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

  - A loop is a sequence of instructions that is repeated until a certain condition is met
  Loops offer a quick and easy way to do something repeatedly 
  - There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times (it is possible that number could be zero!)
  - The various loop mechanisms offer different ways to determine the start and end points of the loop. There are various situations that are more easily served by one type of loop over the others.

  for statement
 */
  for ([initialExpression]; [conditionExpression]; [incrementExpression]) {
    statement
  }
/* - a for loop repeats until a specified condition evaluates to false
   - This is what happens when a for loop is ran: 
        1. the initializing expression [initialExpression] if any, is executed
        2. the [conditionExpression] is evaluated. If the value is true, the loop statement executes. Otherwise, the for loop will terminate. If [conditionExpression] is omitted entirely, the condition is assumed to be true.
        3. the [statement] executes. The statement must be inside a code block ({})!
        4. THEN the update expression, or [incrementExpression] is executed 
        5. the pointer will then return to step 2 and loop as many times as the [incrementExpression] calls out 


  while statement (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)  */

  while (condition)
  statement

  /*  - a while loop executes its statements as long as a specified condition evaluates to true.
    - if the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop  
    - the condition test occurs before the statement in the loop is executed 
    - if the condition returns true, statement is executed and the condition is tested again. 
    - if the condition returns false, execution stops, and control is passed to the statement following while 
    - to execute multiple statements, use a code block ({}) to group those statements
    - see example below:  */
      let n = 0;
      let x = 0;
      while (n < 3) {
        n++; 0 + 1 = 1  1 + 1 = 2  2 + 1 = 3
        x += n; 0 + 1 = 1  1 + 2 = 3  3 + 3 = 6
      }
}

{/* DOM 
  - the browser controls the DOM  */
}

{/* APIs (https://blog.postman.com/intro-to-apis-what-is-an-api/)
  API = Application Programming Interface
  APIs are little pieces of code that make it possible for digital devices, software apps, and data servers to talk with each other, and they are the essential backbone of a lot of services we rely on now. 
  API Integration 
    the connection between two or more applications/programs/services/systems, using APIs
  What are APIs used for?
    they power desktop apps
    they are behind most web applications
    they make mobile applications possible
    they are the integrations for no code solutions
    they connect devices to the internet
  How do APIs work?
    they share data and info between apps, systems, and devices
  Internal APIs
    private and only used by your team, department, company, or org.
  External API
    public or open APIs - publicly available for anyone to use */
}

{/* jQuery 
  this is an API  */
} 

{/* Third-Party APIs 
  we can do lots of stuff with third-party APIs */
}
  
{/* Server-Side APIs
  Client-Server Model
    - a distributed application structure that partitions task or workload between the providers of a resource or service, called servers, and service requesters called clients. 
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

  JSON (JavaScript Object Notation)
    - with this, we can:
      - retrieve weather data in our app
      - display google maps in our app

    - Fetch!  (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
        - This is basically parsing the data into JSON, and then writing the links to the screen */
        fetch(requestUrl)
        .then(function (response) {
          return response.json(); //this spits back a real workable javascript object  (data)
        })
      
/*     - if a function returns a Promise, use .then 

    - There is more than one way to request data from a server-side API.
      - An XMLHttpRequest was the predecessor to fetch.
      - AJAX is another alternative to fetch. AJAX requests require the use of the third-party library, jQuery, to work.
*/
}