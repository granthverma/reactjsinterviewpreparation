/**
 * 
 * this =यह  keyword  but value change  according scenario
 * this object this vs code this window   yhe golbal objects  read
 * koi object nahi hoga toh this keyword  function window objects result dega
 * function xyz = () {
 *       return this
 *        }
 *  console.log(xyz())
 * 
 * 
 *   "use strict "
 *   function xyz = () {
 *       return this
 *        }
 *  console.log(xyz())
 * 
 *    --->   undefined aayaga
 * 
 * its use for current context  ko refer karta hai 
 * this work only objects not in function normal way main
 * reference in node envirment {} 
 * in browser  result milta window objects
 * arrow function  () => {} yhi arrow function hota hai 
 * {} use kar raHha ho  return aana compulsory // explicted return
 * () ke sath return ki koi need nahi hai  // implicit return
 * 
 * 
 * 
 * 
 * const addTwo  hold value in name =(num1 , num2) =>{
    return num1 +num2
} 
 */



const user ={
    username :"honey",
    price :999,
    welcomeMessage : function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username ="loveyou"
// user.welcomeMessage()


// change the value 


console.log(this);  // reference in node envirment {}

// browser ke andar golbal object window hai 
// in js we run this fnf in  browser then we get window object 



//++++++++++++++++ 



function oku() {
    let username ="hitesh"
    console.log(this.username);
    
}

oku()

//* this work only objects not in function

const twoye = function () {

    let username ="hitesh"
    console.log(this.username);
    
}

twoye ()

const thriduu =  () => {
    let username ="granth"
    console.log(this);
    
}
thriduu ()


//++++++++++++++++  arrow function 


/**
 *  hold value in name
 */


const addTwo =(num1 , num2) =>{
    return num1 +num2
}
// explicit return


console.log(addTwo(4 ,5));

//++++++++++++++++   implicit return
// if {} then must include retuen keyword 
// if use () then not require use this return keyword 

const addApple = (num1 , num2 ) => (num1+num2)

console.log(addTwo(3 ,4));


const mango = (num1 , num2 ) => ({username:"honey"})

console.log(mango(3 ,4));

// The 'this' keyword inside a function refers to the object that the function is a property of or the object that the function is called on. However, the behavior of the this keyword inside an arrow function is different from regular functions.
// In an arrow function, the this keyword is lexically scoped, meaning it takes on the value of the this keyword in the surrounding code. The this keyword in an arrow function does not get rebound when the function is invoked, unlike regular functions. It keeps the same value as the this keyword in the surrounding code.