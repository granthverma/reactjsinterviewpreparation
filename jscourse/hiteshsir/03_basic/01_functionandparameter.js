// function chalo() {
//     console.log("j");
//     console.log("k");
//     console.log("o");
//     console.log("p");
//     console.log("q");
//     console.log("i");
    
// }

// chalo()

// jscourse/hiteshsir/03_basic/01_functionandparameter.js

/**
 * chalo is refererce  , for () executed we use this 
 * >> parmeters then we create function function ()
 * >> when we called the functions its called arruguments 
 * >>  console.log console hi hota hai  es mein  kuch return value nahi hoti hai
 * >> return ke baad kuch bhi likho wo unreachable hai hota hai 
 * >>  retrun is right way to use 
 * >>   rest and spread operators >>>>>The main difference between rest and spread is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array. But the spread syntax expands iterables into individual elements.
 */


// function add(num1 ,num2) {

//     console.log(num1+num2);
    
// }


// add(3,4)


// function add(num1 ,num2) {

// //      let result = num1 + num2 
// //    return result
//     // console.log(num1+num2);    

//     // 6 Result undefined

    
//     return num1 + num2
// }

// const result = add (2, 4)
// console.log("Result" ,result);


// value  kaise li ja skati hai aur kaise kam kar skta hau hum
// 



// function loginUserMessage(username) {

//     return `${username} just logged in`
    
// }

// function loginUserMessage(username) {

//     //  username === undefined  ----> !username) some "" false value  username ko hum kuch bhi rakha sakta hai 
//      if (!username) {
//         console.log("Please enter a username");
//         return
//      }
//      return `${username} just logged in`
    
// }

// console.log(loginUserMessage());

// loginUserMessage() its  biggest mistake  you want bro then use log 
//  koi value hai nhai toh kya ........????? its showing  undefined

// console.log(loginUserMessage());


// +++++++++++-----------part 2 



// function calculateCartPrice(value1 ,value2 ,...num1) {
//     return num1 
    
// }

// console.log(calculateCartPrice (200 , 400 ,500 ,2000));

// result  [ 500, 2000 ]



// now we talk about objects 

const user ={
    username:"himanshu",
    price :199 ,
}


function xyz(koibhiobject) {
    console.log(`Username is  ${koibhiobject.username} and price is ${koibhiobject.price}`);
    
}

// xyz(user)


xyz({
    username:"himanshu",
    price :1999 ,
})


const myNewArray = [200,400,100,600]


function returnlastvalue(koibhinameleletahai) {
    return koibhinameleletahai [1]
}


// console.log( returnlastvalue(myNewArray));


console.log(returnlastvalue([200,400,500,1000]));

