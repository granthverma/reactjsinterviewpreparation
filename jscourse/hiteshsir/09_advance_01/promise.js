/*
 promise is one of these states ->
 1 ). pending -- inital state ,neither fulfilles nor rejected 
 2 ). fullfilled .meaning that the operation was completed successfully
 3 ). rejected - meaning that the operation failed 

//  object ke trah mile tha es6 mein tha

reslove reject par story hai promise ki  
reslove ho then reject ho toh catch 
then , then catch 
phale then reposen ko handal karga 
dusara then data ko karga 
thrid  error ko karga 

sab mein then ek common hai wo ( ()=> {

})

ye syntax common hai toh es par dhayan dena 

promisre libraries like Q or BuleBird now that we have Es6 promise
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png
 */

 const promiseOne = new  Promise(function (resolve ,reject) {


    // do anayync task 
    // DB calls , cryptography network 

    setTimeout(function () {
        console.log(`today taskis compeleted then you grow in life `);
        resolve()
        // we called resolve
        
    }, 1000)

 } )

//  this how we create promise

 promiseOne.then(function () {
 console.log("Promised Consumed  ");
    
})
// promise 2 


new Promise(function (resolve ,reject) {
    setTimeout(function()  {
        console.log("Async2 karo lo ho jayaga");
        resolve()
    }, 1000);
    
}).then(function(){
    console.log("Async2 resolved");
    
})


// promise 3 by granth
new Promise(function(resolve ,reject){
  setTimeout(function(){
    console.log("task 3");
    resolve()
    
  }, 1000);

    
}).then(function(){
    console.log("resolved 3");
    
})
// promise 4 by hitesh sie
const promiseThree = new Promise (function (resolve , reject) {
    setTimeout(function()  {
        resolve({username: "Chai" ,email :"himanshu@gmail.com"})
        
    }, 1000);
    
})

promiseThree.then(function(user){
    console.log(user);
})


// promise 5 hitesh sir


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = false 

        if (!error) {
            resolve ({username:"granth", password:"123"})
        }
        else {
            reject('ERROR: Something went wrong')
        }
        
    }, 1000);
})

promiseFour
.then( (user) => {
    console.log(user);
    return user.username
    
}).then((username) =>{
    console.log(username);
}).catch(function (error) {
    console.log(error);
    
}).finally(() => console.log("The promise is either resolved or rejected"))


// promise 6 hitesh sir

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
// promise object 

// async function consumePromiseFive(params) {
//   const response =  await  promiseFive
//     console.log(response);
// }

// consumePromiseFive()



async function consumePromiseFive(params) {
    try {
        const response =  await  promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
   
  }
  
  consumePromiseFive()


//   async function getAllUsers() {
//     try {

//         const response =await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E :" ,error);
//     }
//   }

//   getAllUsers()


// this methods 


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json ()
})
.then( (data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
