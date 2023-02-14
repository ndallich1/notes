What is a client?

- A client is a piece of computer hardware or software that makes requests to a server. It can be a desktop computer, latptop, mobile device and beyond.

- Github pages is serving content to clients.

What is a server?

- depending on the context, a server is both the physical hardware and the software that hears requests from users and returns something, like an HTML or image file...

What is node.js?

- node is a "runtime" environment for javascript designed to be run outside of a browser. VS code is run in node.js

Why use node.js?

- a general purpose programming language that you can use for all kinds of things
- we were stuck in the browser before, so now we have more capabilities!

# Arrow Functions

- a shorter way to write functions

# Functional Loops

forEach

```js
// old way
for (let i = 0; i < moviePatrons.length; i++) {
  console.log(moviePatrons[i].name);
}

// new way
moviePatrons.forEach((patron) => console.log(patron.age));
```

filter

```js
// old way
const canWatchRatedR = moviePatrons.filter(function (patron) {
  return patron.age > 17;
});
console.log(canWatchRatedR);

// new way
const canWatchRatedR = moviePatrons.filter((patron) => patron.age > 17);
console.log(canWatchRatedR);
```

map

```js
// example 1
const cardedMoviePatrons = moviePatrons.map((patron) => {
  // Copy the object being iterated over
  const pObj = { ...patron }; // this creates a new object called patrons
  // Do everything else the same
  if (pObj.age >= 17) {
    pObj.canWatchRatedR = true;
  } else {
    pObj.canWatchRatedR = false;
  }
  // Be sure to return the new obj, not the parameter
  return pObj;
});

console.log("Movie Patrons: ");
console.log(moviePatrons);

console.log("\nCarded Movie Patrons: ");
console.log(cardedMoviePatrons);

// example 2
const capitalizedPatrons = moviePatrons.map((patron) => ({
  name: patron.name.toUpperCase(),
  age: patron.age,
}));

console.log(capitalizedPatrons);
```

# Process.argv 

- process is is a command like argument 