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
/** Table 20 — typeof Operator Results
Type of val	Result
Undefined	"undefined"
Null	"object"
Boolean	"boolean"
Number	"number"
String	"string"
Object (native and does not implement [[Call]])	"object"
Object (native or host and does implement [[Call]])	"function"
Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".
 */
// ***********************************************************


// Stack and Heap memory in javascript  and Reference 

// stack (👉🏻 Primitive) copy value  milti ha


    //  [--]
    //  [--]
    //  [--]
    //  [--]


    let myYoutubename = "granthcodes"

    let anothername = myYoutubename
    anothername = "himanshu verma"

    console.log(myYoutubename);
    console.log(anothername);
// Heap memory ( Heap memory  Reference  ) value reference  mili thi hai 
   let userOne ={
    email : "granthcodes@google.com",
    upi :"user@ybl",
   }

   let userTwo = userOne

   userTwo.email = "himanshu@google.com"

   console.log(userOne.email);
   console.log(userTwo.email);