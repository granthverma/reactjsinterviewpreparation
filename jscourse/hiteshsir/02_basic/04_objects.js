//singleton 

// object.create    singleton


const mySym = Symbol("key1")

const JsUser ={
    name : "himanshu",
    [mySym]:"mykey1" ,  //[mySym] to declear to Symbol we use this 
    age :18,
    location:"jaipur",
    "email":"himanshuverma@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday ,Saturday"],
    // welcome:"abc",
    // welcome2:"abcd"




}

// console.log(JsUser.age);
// console.log(JsUser["email"]);

// console.log(JsUser[mySym]);  // [] to get value 

// how access user details ----> . from dot you access all deatails of user 
//  second way to  value [""]  , key also string we need array to accees this value 


// two frist  play role of key  and second play role of value  

// Symbol 

// how to  change the value 

JsUser.email ="himanshuverma@granth.com"

// console.log(JsUser.email);
// you want no one  chnage the value then we .freeze method

// Object.freeze(JsUser)

JsUser.email ="himanshuverma@granthcodes.com"

// console.log(JsUser.email);




// jscourse/hiteshsir/02_basic/04_objects.js
// jscourse/hiteshsir/02_basic

//  js main functions ko normal variable jaise treat kar skta hai 


JsUser.welcome = function() {
    console.log("Hello Js user");
    
}

JsUser.welcome2 = function() {
    console.log(`Hello Js user ,${this.name}` );
    
}
console.log(JsUser.welcome()); // kabhi function ko console () imp hai 
console.log(JsUser.welcome2());