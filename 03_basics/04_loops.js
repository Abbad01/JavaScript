
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}
//use suggestions for loop syntaxes

//Map
const map=new Map();
map.set('In', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

console.log(map);
// Map(3) {
// 'In' => 'India',
// 'USA' => 'United States of America',
//  'Fr' => 'France'
// }

for (const key of map) {
    console.log(key);
}
// [ 'In', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

for (const [key] of map) {
console.log(key);   
}
// In
// USA
// Fr
for (const [key,value] of map) {
console.log(value);   
}
// India
// United States of America
// France

//*************for in loop on objects */
const myObject={
    js:"JavaScript",
    cpp:"C++",
    rb:"Ruby",
    c_hash:"C-Sharp"
}
for (const key in myObject) {
        const keys=key;
        console.log(keys);//will give keys
        const values = myObject[key];// will give values of key,value pair
        console.log(values);
        
    
}
//can't apply for in on maps

//on Arrays
const language=["js", "cpp", "java"];
language.forEach(function(item){
    console.log(item);    //js,cpp,java
})

const coding=[
    {   langName:"javascript",
        langFileName:"js"
    },
    {   langName:"java",
        langFileName:"java"
    },
    {   langName:"python",
        langFileName:"py"
    }
]

coding.forEach((item)=>{
    console.log(item.langName);
})