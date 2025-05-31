const name="Abbad";
const repoCount=20;
//strng interpolation
console.log(`Hello, I am ${name} and my repo count is ${repoCount}`);
console.log(name[0]);//A

//string object.
const game=new String("Dream11");
console.log(game[0]);
console.log(__proto__);// object, check more methods in browser
console.log(game.toUpperCase());
/* will not change original string, as Strings are immutable in js
and this method will return a new String object */

const anotherString=game.slice(-5,5);
console.log(anotherString)
