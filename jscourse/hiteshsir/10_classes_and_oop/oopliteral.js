const user ={
    username:"granth",
    loginCount:8,
    signedIn :true ,

    getUserDetails: function () {
        // console.log("Got user details from database ");
        // console.log(`Username : ${this.username}`);
        // console.log(this);
    }


}

// this current context ki baat kar raha hai 
// 
// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);


// Constructor allow karte ek se mutliple intence create karti hai


// const promiseOne = new Promise ()
// const date = new Date()   new is exmple

// instance of javascript 

function User(username , loginCount , isLoggedIn) {

    this.username = username;
    this.loginCount = loginCount ;
    this.isLoggedIn =isLoggedIn;


    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
        
    }

    return this
    
}


const userOne = new User("granth" ,12 , true)
const userTwo = new User("himanshu" ,11 , false )

console.log(userOne.constructor);
// console.log(userTwo);