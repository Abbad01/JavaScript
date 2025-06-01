/*
1.JavaScript arrays are resizable and can contain a mix of different data types.
2.JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last
 element is at the value of the array's length property minus 1.
3.JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create 
 shallow copies(copy having same refernce of original), rather than deep copies).
*/

const arr=[0,1,2,3,4,5];

//Methods(learn more on console(prototypes) or mdn)

arr.push(6);
arr.pop(6);
console.log(arr);//[ 0, 1, 2, 3, 4, 5 ]
arr.unshift(9)
console.log(arr);//[ 9, 0, 1, 2, 3, 4, 5 ] adds to front
arr.shift();
console.log(arr);//[ 0, 1, 2, 3, 4, 5 ] removes one from front

const newArr=arr.join();
console.log(newArr);//String it becomes after usage of join method.
console.log(arr);

//slice(will not alter the original array, and end index is not included) or splice(remove the section of array and includes the end index)

const a=[0,1,2,3,4,5,6];
a.slice(1,3);
console.log(a);//[0,1,2,3,4,5,6]
a.splice(1,3);
console.log(a);//[ 0, 4, 5, 6 ]

//Spread or concat
const marvel=["Ironman", "Captain", "Thor"];
const bolly=["Amir", "Shahrukh", "Salman"];
marvel.push(bolly);
console.log(marvel);//[ 'Ironman', 'Captain', 'Thor', [ 'Amir', 'Shahrukh', 'Salman' ] ] pushes another array as a single element

const concatenating=marvel.concat(bolly);
console.log(concatenating);//[ 'Ironman', 'Captain', 'Thor', 'Amir', 'Shahrukh', 'Salman' ]

//most of the time we use spread operator, it spreads each array element
const spreaded=[...marvel, ...bolly];
console.log(spreaded);//[ 'Ironman', 'Captain', 'Thor', 'Amir', 'Shahrukh', 'Salman' ]

const naya=[1,[2,3],[4,5,[6,7,8]],9];
const flatted=naya.flat(Infinity);
 console.log(flatted);//[1,2,3,4,5,6,7,8,9]

 //convert to array
 console.log(Array.from("Abbad"));//[ 'A', 'b', 'b', 'a', 'd' ]
 console.log(Array.from({name:"Abbad"}));//[], will return empty array, we need to tell what to use(key or value) to make array of it.
 let score1=100;
 let score2=200;
 let score3=300;
 console.log(Array.of(score1, score2, score3));