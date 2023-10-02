/*
   there two type data 
   ➡️ primitive and Reference ( non-primitive)
   ->primitive 
             -> Number  1
             -> String  "hhhh"
             -> Boolean  true and false
             -> null     temp 0
             -> undefined  jo defined na ho
             -> Symbol    spacial value 
             -> BigINt    for big interger

----------->
            Reference ( non-primitive)

            []{}()
            [] -- > Array
            {} -- >  objects
            () -- > function

jscourse/05_datatpes-summary.js




*/


const score =100 //Number
const scoreValue =100.3

console.log(score);
console.log(scoreValue);

const isLoggedIn =false //boolean
console.log(isLoggedIn);


const outsideTemp =null 
console.log(outsideTemp); // null

const id =Symbol('123')
const anotherId =Symbol ('123')
console.log(id === anotherId); // Symbol


const bigNumber =23456787282828n

console.log(bigNumber);


// Reference ( non-primitive)
//  []{}()
// [] -- > Array
// {} -- >  objects
// () -- > function

// [] -- > Array

const city = ["ajmer" , "jaipur" ,"pali" ,"udaipur"]
console.log(city);

// {} -- >  objects
const ajmer = {
    population : 30000 ,
    awardCatgary : "gold",
    emailid : "ajmerofficial@gmail.com"

}

console.log(ajmer);


// () -- > function
const Cal = function () {
    console.log("total population ");
}

Cal()
Cal()
Cal()