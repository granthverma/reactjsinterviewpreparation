/**
 *  falsy values ---> 
 *  false , 0 ,-0 , bigInt, 0n ,"" , null , undefined ,NaN
 *  eska aalwa sabi   truthy values hoti hai 
 *  but agar string mein toh wo false nahi hogi
 * "0" , "false" , " " , [] , {} , function () {}
 * 
 * 
 * 
 */


// const userEmail =[]
// if (userEmail) {
//     console.log(`got user email`);
    
// } else {
//     console.log(`dot'have user email`);
// }


 const emptyObj ={}
 if (Object.keys(emptyObj).length=== 0) {
    console.log(`Object is empty`);
    
 }

 
//  // Nullish Coalescing Operator (??): null undefined
 
//  let val1;
//  // val1 = 5 ?? 10
//  // val1 = null ?? 10
//  // val1 = undefined ?? 15
//  val1 = null ?? 10 ?? 20
 
 
 
//  console.log(val1);
 
//  // Terniary Operator
 
// condition ? true : false
 
 const iceTeaPrice = 100
 iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


//  jscourse/hiteshsir/04_control_flow/truthy.js

// node jscourse/hiteshsir/04_control_flow/truthy.js