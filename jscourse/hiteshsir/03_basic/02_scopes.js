 /*
 
{} yha hota hai scope jha tk yha whi tk wo sxope hoga 
 
 
 
 */
// let a =300
// if (true){
//     let a =10
//     const b =20
//     // var c =30
//     console.log("INNER: " ,a);

// }

// // {} jo {} es main hoga wo block scope hoga  es ka bhar wo hoga global scope  blcok se bhar kuch nahi ja skati hai but global value hogi inner scope ko access kar skti hai 

// //  let a =10
// //  const b =20
// //  var c =30

//  console.log(a);
//  console.log(b);
//  console.log(c);
// jscourse/hiteshsir/03_basic/02_scopes.js


// 

function one() {

  const username = "himanshu";

  function two (){
    const website ="youtube";
  }

  // eska access yha tk
  // console.log(website);

  two()
    
}

one()


// jscourse/hiteshsir/03_basic/02_scopes.js
// line by line  execution hota hai  , child aapne parents ko access kar sakat hai 
// 


if (true){
  const username ="honey"
  if (username === "honey"){
    const website ="youtube";
    console.log(username +website);
  }

  // console.log(website);
  // not access this point because eska area nahi hai 

}

// console.log(username);