//Immediately Invoked Function Expressions (IIFE)
(function() {
  // Code inside IIFE
  console.log("IIFE executed!");
})();//semicolon is necessary


((name) => {
  console.log(`Arrow function IIFE executed! and ${name} is executing it.`);
})("Abbad");


/*
1.function() { ... } → A function expression

2.( ... ) → Wraps it to convert declaration to expression

3.() → Immediately invokes the function
 */

//Avoid polluting global scope
//IIFE is about creating scope + running it immediately, without polluting the global space or needing an extra call.

const counter=(function() {
let count=0;
return {
    increment:function() {count++;},
    getCount:function() {return count;}
};
})();
counter.increment();
counter.increment();
console.log(counter.getCount());//2
