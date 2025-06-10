/* What is Asynchronous Behavior?
JavaScript’s asynchronous behavior allows it to handle tasks in the background without blocking the execution of other code.

# Synchronous vs Asynchronous
Feature	                      Synchronous	                                              Asynchronous
Nature	           Blocking (waits for task to complete)	               Non-blocking (can continue other tasks)
Execution	             One at a time in sequence	                        Can start one, then continue another
Example              Reading a big file blocks next line	              Reads file in background, allows next line

# Why is Asynchronous Behavior Needed?
JavaScript runs in a single thread — it can do only one thing at a time.

So if we did everything synchronously, a long-running task like fetching data from the server would freeze the page until it finishes.

Asynchronous behavior allows JS to:

Do time-consuming tasks without freezing

Respond to events like button clicks immediately

Perform tasks like API calls, setTimeout, file reading in the background

# How JavaScript Handles Asynchronous Code
# The Main Components:
Call Stack

Web APIs / Browser APIs

Callback Queue (Task Queue)

Event Loop

🧠 What is the Event Loop?
The Event Loop is the heart of JavaScript’s asynchronous behavior. It acts like a traffic controller, making sure that:

Synchronous code runs immediately.

Asynchronous tasks (like setTimeout, fetch, or user input) are handled without blocking other code.

Everything runs in the correct order, even across Web APIs, Promises, and more.

🧩 Key Components Involved
1. Call Stack (Execution Stack)
This is where your code runs.

Works in LIFO (Last In, First Out) manner.

If the stack is busy, nothing else runs.

2. Web APIs (Browser features)
Handles things like setTimeout, DOM Events, fetch(), etc.

These APIs are not a part of JS — the browser handles them separately.

3. Callback Queue (Macrotask Queue)
Stores callback functions for:

setTimeout

setInterval

DOM events

Tasks are moved here when Web APIs are done.

4. Microtask Queue
Stores callbacks from:

Promise.then()

MutationObserver

Runs before the callback queue after the stack is empty.

5. Event Loop
Continuously checks:

Is the call stack empty?

Are there tasks in microtask queue?

Are there tasks in callback queue?

If yes → Push task to the stack one by one.


//code
console.log('Start');
setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');

🧪 Execution Order:
console.log('Start') → Goes to Call Stack → Prints Start

setTimeout() → Passed to Web APIs → Timer starts in background

Promise.then() → Microtask → Goes to Microtask Queue

console.log('End') → Goes to Call Stack → Prints End

Call Stack is now empty

Event Loop checks:

Microtask queue has Promise.then() → Executes → Prints Promise

Then it checks Callback Queue:

Timer (setTimeout) finished → Executes → Prints Timeout

//output
Start
End
Promise
Timeout

🎯 Rules of Event Loop
Only one thing runs at a time (Call Stack)

Microtasks have higher priority than macrotasks

Web APIs run in the background, don’t block JS

The Event Loop waits for the stack to empty before running async code

🧠 Real-Life Analogy
Imagine:

You (JS engine) are a chef with a single stove (single-threaded)

Tasks like boiling pasta (setTimeout) go to a kitchen timer (Web API)

While the pasta boils, you prepare the salad (synchronous code)

When the pasta is done, the timer (event loop) says: “Stove is free, cook this now.”

*/
