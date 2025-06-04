function sayMyName(){
    console.log("Abbad");
}
function loginUserMessage(username){
    return `${username} just logged In`;
}
console.log(loginUserMessage("Abbad"));

//Rest parameter
function calculatePrice(...num1){//no fixed no.of arguments, num1 will be an array
return num1;
}
console.log(calculatePrice(200,400,600,800));//[ 200, 400, 600, 800 ] num1 is returned as array.

//passing object in function
const user={
username:"Abbad",
price:299
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);//Username is Abbad and price is 299

// u can directly pass object.
handleObject({
    username:"Anas",
    price:199
})//Username is Anas and price is 199

//passing arrays
const arr=[200,400,500];
function returnSecondValue(newarr){
return newarr[1];
}
console.log(returnSecondValue(arr));//400

//SCOPE

//{} is scope
//global scope in browser and node environment is different.

//*************************************** */
console.log(addOne(5));//this will not give error of accessing before initialisation
function addOne(num){
    return num+1;
}

console.log(addTwo)//this will give error of accessing before initialisation
const addTwo=function(num){
return num+2;
}
//value returned from function is being stored in const variable, therefore u can't access it above the function declaration



