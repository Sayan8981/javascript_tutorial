const fetch = require('node-fetch');

function getData() {
  // promisifying the asynchronous functions
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("The operation getData is successfull");
    }, 1000);
  });
}

function sendData() {
  // promisifying the asynchronous functions
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("The operation sendData is successfull");
    }, 1000);
  });
}

// consuming promise using async await syntax
async function processRequest() {
  var data = await getData();
  var operation = await sendData();

  console.log(data, operation);
  return data;
}
processRequest(); // calling the async method


/** Typical of chaining the promise */

// getData()
// .then(val => sendData())
// .then(data => console.log(data))
// .catch(err => console.log('err', err));

/*********************************************************************************************8 */

// consuming the fetch api promise using promise chaining 

// fetch("https://api.github.com/users/octocat")
// .then(res => res.json()) // promise
// .then(content => console.log('fetched',content))
// .catch(err => console.log('error', err));

// Handle fetch with async/await
async function getUser() {
    try{

        const response =  await fetch("https://api.github.com/users/octocat"); // await keyword will resolve the promise
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(erroir);
    }
  }
  

// Execute async function
// getUser();