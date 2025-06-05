// filter method
const books = [
  {
    title: "The Great Gatsby",
    genre: "Classic",
    publishYear: 1925,
    edition: "1st"
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publishYear: 1960,
    edition: "2nd"
  },
  {
    title: "1984",
    genre: "Dystopian",
    publishYear: 1949,
    edition: "3rd"
  },
  {
    title: "The Pragmatic Programmer",
    genre: "Technology",
    publishYear: 1999,
    edition: "1st"
  },
  {
    title: "Clean Code",
    genre: "Programming",
    publishYear: 2008,
    edition: "2nd"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    genre: "Non-fiction",
    publishYear: 2011,
    edition: "1st"
  },
  {
    title: "The Alchemist",
    genre: "Philosophical Fiction",
    publishYear: 1988,
    edition: "4th"
  }
];

const required=books.filter((item)=>{
  return item.genre==="Fiction";
   
})
console.log(required);

//map function,The .map() function in JS is used to create a new array by transforming each element of an existing array.

const bookNames=books.map((item)=>{
        return item.title;
})
console.log(bookNames);
// [
//   'The Great Gatsby',
//   'To Kill a Mockingbird',
//   '1984',
//   'The Pragmatic Programmer',
//   'Clean Code',
//   'Sapiens: A Brief History of Humankind',
//   'The Alchemist'
// ]

//REDUCE
//The .reduce() function in JS is used to reduce an array to a single value by applying a function to each element (from left to right).

//array.reduce((accumulator, currentValue) => { ... }, initialValue);

//Example 1: Total of all publish years
const total=books.reduce((sum,curr)=>{
  return sum+curr.publishYear; 
},0);
console.log(total);//13840

//Example 2: Count how many books per genre
const perGenre=books.reduce((acc,book)=>{
   acc[book.genre]=(acc[book.genre]||0)+1;
   //book.genre is variable and it is dynamic,therefore stored as a property of acc object by usng square brackets 
   return acc;
},{});// passing empty object in initialisation of acc
console.log(perGenre);//will print an object

//Example 3: Find the most recently published book
const latestOne=books.reduce((latest,book)=>{
  return book.publishYear>latest.publishYear?book:latest;
})
console.log(latestOne.publishYear);//2011