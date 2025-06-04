
const addTwo=(num1, num2)=>{
return num1+num2;
}

const addThree=(num1,num2,num3)=> num1+num2+num3;//implicit return
// or
const addthree=(num1,num2,num3)=> (num1+num2+num3);
// if curly braces are bring used, necessary to write return, if not no need

const returnObject=(obj)=>({username:"Abbad"})//  to return object u need to wrap it inside parantehsis.