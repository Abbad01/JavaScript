// //easy comparisons
console.log(2>1);
console.log(2<1);
console.log(2<=1);
console.log(2>=1);
console.log(2==1);
console.log(2!=1);

console.log("2">1);//2 converted to number
console.log("02">1);

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
/* The reason is that an equality check(==) and comparisons
(>,<,>=,<=)work differently.Comparisons convert null to a
number, treating it as zero, in eqaulity check null only 
equals itself or undefined */

console.log("3"==2);// 3 gets converted to number, so false.