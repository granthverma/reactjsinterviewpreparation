/**
 * function bhi ek  objects  hai 
 * function bhi function aur objects 
 * har chze object hota hai aur function bhi function aur objects hai
 * function - 👉🏻
 *  Array -   👉🏻    object 👉🏻 null
 *  String  - 👉🏻
 *  this  👉🏻 jisne bhi 
 */

function mutlipleBy5(num) {
    return num*5
    
}
mutlipleBy5.power = 3
console.log(mutlipleBy5(5));
console.log(mutlipleBy5.power);
console.log(mutlipleBy5.prototype);

// 25
// 2
// {} by default context set hota hai uske context hota hai 

function createUser(username ,score) {
    this.username = username;
    this.score =score;
}

createUser.prototype.increment = function () {
    this.score ++
    
}
createUser.prototype.printme = function () {
    console.log(`price is ${this.score}`);
    
}

const chai = new createUser("chai", 25)
const tea = new  createUser("tea", 250)

chai.printme()
tea.printme()

// chai.increment()
// tea.increment()






/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/