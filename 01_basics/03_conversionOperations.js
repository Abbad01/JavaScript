let score=33;
console.log(typeof(score));//number is output
let score2="33";
console.log(typeof(score2));//string is output

//////////////////////////////////

let score3="33abc";
console.log(typeof(score3));//string
console.log(Number(score3));
/*NaN is the output as score3 is not a number solely(in the
form of string), so conversion  to number was not poosible.
 */

let score4=null;
console.log(Number(score4));//0 is the output.

let score5=undefined;
console.log(Number(score5));//NaN is the output

let score6=true;
console.log(Number(score6));

//Briefing
/*
"33"=>33
"33abc"=>NaN(typeof NaN is number.)
true=>1, false=>0
 */

//CONVERSION TO BOOLEAN

let flag=1;//true
let flag2=0;//false
let flag3="abbad";//true
let flag4="";//false
console.table([Boolean(flag),Boolean(flag2),Boolean(flag3),Boolean(flag4)])

//CONVERSION TO STRING

let number=33;
console.log(String(number));// type changed to string.


/********************Operations********************/
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

// console.log("1"+2);//12
// console.log(1+"2");//12
// console.log(1+2+"2");32
// console.log("1"+2+2);//122

//PREFIX AND POSTFIX INCREMENT

//Prefix increment
let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;//bigint
const y2 = ++x2;
// x2 is 4n; y2 is 4n

 console.table([x,y,x2,y2]);

//Postfix increment
let x3 = 3;
const y3 = x++;
// x3 is 4; y3 is 3

let x4 = 3n;
const y4 = x2++;
// x4 is 4n; y4 is 3n