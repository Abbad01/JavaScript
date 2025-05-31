const other=201.8675;
console.log(other.toPrecision(4));//will round off and return 4 digits in form of string.
console.log(other.toFixed(2));//201.87, will fix places of decimal in output.
console.log(other.toString().length);// type now converted to string, string methods are now applicable.

const hundreds=10000000000;
console.log(hundreds.toLocaleString('en-IN'));//10,00,00,00,000


const balance=new Number(21780);
console.log(balance);//[Number: 21780]
console.log(Number.MAX_VALUE);//1.7976931348623157e+308


/**************Maths*************************/

// console.log(Math)//do it in console to know different methods.
console.log(Math.abs(-89));//89
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4,3,8,9));
console.log(Math.max(4,3,8,9));

console.log(Math.random())// between 0&1
console.log((Math.random()*10)+1);//0-9 may not be integer
console.log(Math.floor(Math.random()*10)+1);//0-10 but integer

//if between certain min and max
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);