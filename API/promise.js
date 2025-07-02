/*🔷 What is a Promise?
A Promise in JavaScript is an object that represents the eventual result (or failure) of an asynchronous operation.

It's like a placeholder for a value that will be known later (after some operation completes).

🔹 States of a Promise
A promise can be in one of these three states:

State	                              Meaning
Pending	                   Initial state, neither fulfilled nor rejected
Fulfilled	                   Operation completed successfully
Rejected	                         Operation failed

*/

/*
https://api.github.com/users/Abbad01

{
  "login": "Abbad01",
  "id": 140261539,
  "node_id": "U_kgDOCFw4ow",
  "avatar_url": "https://avatars.githubusercontent.com/u/140261539?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Abbad01",
  "html_url": "https://github.com/Abbad01",
  "followers_url": "https://api.github.com/users/Abbad01/followers",
  "following_url": "https://api.github.com/users/Abbad01/following{/other_user}",
  "gists_url": "https://api.github.com/users/Abbad01/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Abbad01/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Abbad01/subscriptions",
  "organizations_url": "https://api.github.com/users/Abbad01/orgs",
  "repos_url": "https://api.github.com/users/Abbad01/repos",
  "events_url": "https://api.github.com/users/Abbad01/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Abbad01/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-07-22T14:50:29Z",
  "updated_at": "2025-06-05T08:48:20Z"
}


*/

// JavaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier. Think of a Promise as a placeholder for a value that will be available in the future. It can be in one of three states

// Pending: The task is in the initial state.
// Fulfilled: The task was completed successfully, and the result is available.
// Rejected: The task failed, and an error is provided.

// Syntax

// let promise = new Promise((resolve, reject) => {
//     // Perform async operation
//     if (operationSuccessful) {
//         resolve("Task successful");
//     } else {
//         reject("Task failed");
//     }
// });

//creating promise
const promiseOne=new Promise(function(resolve,reject){ //promise created
  setTimeout(function(){
    console.log("Async call created")
    resolve();  //this will connect then with reolve
  }, 2000)
})
//consuming promise
promiseOne.then(function(){  //then is connected to resolve
  console.log("Promise consumed");
  
})

const promiseThree=new Promise(function(resolve,reject){
 setTimeout(function(){
   console.log("Third Async call created")
  resolve({username:"Abbad", email:"abbad@exmple.com"});//array,object etc can be passed 
 },5000)
})
promiseThree.then(function(user){
  console.log("Promise 3 consumed");
  console.log(user);//what u are passing in resolve, u get access of it in then
  return user
  
}).then(function(user){
  console.log(user.username);
  
})

// Using Promises with async/await (Modern Syntax)

function getUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ name: "Abbad" }), 2000);
  });
}

async function fetchUser() {
  console.log("Fetching...");
  const user = await getUser();  // wait until resolved
  console.log(user);
}
fetchUser();
// Output:
//Fetching...
//{name: "Abbad"}