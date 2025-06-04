
//object literals
const mySym=Symbol("key1");//use this symbol as key in object
const User={
    //keys are treated as strings
    name:"Abbad",
    [mySym]:"myKey1",//if u would not apply square brackets, mySym will be treated as string
    age:22,
    location:"Delhi",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Friday"]

}

//console.log(User.location);
//other way of accessing js objects
//console.log(User["location"]);
//console.log(User[mySym]);

// Object.freeze(User);// will not allow any changes in object.

User.greeting=function(){
    console.log("Hello JS User");
}
User.greetingTwo=function(){
console.log(`Hello JS User, ${this.name} this side `)
}
console.log(User.greetingTwo);//[Function (anonymous)] only reference og function
console.log(User.greetingTwo());

//singleton

const myUser=new Object();
myUser.id="123";
myUser.name="Darren";
//console.log(myUser.name);//Darren

const obj1={1:"a", 2:"b"};
const obj2={3:"c", 4:"d"};
const obj3={obj1,obj2};
//console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4=Object.assign({}, obj1, obj2);
//console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5={...obj1, ...obj2};
//console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//getting key & values of object.
// console.log(Object.keys(User));//return type array
// console.log(Object.values(User));//return type array
// console.log(Object.entries(User));//return type array of (key,value) pair arrays
// console.log(Object.hasOwnProperty("isLogged"));//false

//Destructuring in JavaScript is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.
const course={
    courseName:"Javascript",
    price:"999",
    courseInstructor:"Abbad"
}
const{courseInstructor:Instructor}=course;
console.log(Instructor);//instead of using course.courseInstructor everytime we can use Instructor simply.

