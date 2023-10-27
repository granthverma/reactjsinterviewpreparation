/*
now we talk about var let const 

1).var ➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️
 ..  var old js mein tha
 ... var function scoped hota hai 
 ..... var apne parent function mein kahi bhi use ho skta ha 
 ... var adds itself to the 
 ....... not good itself add window 



 2).let const ➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️

 let const new js mein hai
 let const braces scoped hai 
 let const doesn't adds

// 

perfer not to use var 

beacause of issue in block scope and funtional scope

jscourse/hiteshsir/01_basic copy


node jscourse/hiteshsir/01_basic/variables.js
*/ 

//  tc39 , mdn



const accountId =144553 ;
let accountEmail ="himanshuverma@gmail.com"
var accountPassword ="123456";
accountCity ="Jaipur"

let accountState;


accountEmail ="hv@GMAILL.com"
accountPassword ="567890";
accountCity ="ajmer"



console.table([ accountId ,accountEmail,accountCity ,accountPassword ,accountState] );