// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2 !=1);

// true
//  true
// false
//  false
//  true

// datatype must some for good code pratice 
// jscourse/04_comparision.js 
// console.log("2"> 1);
// console.log("02"> 1);

// console.log("0"> 1);

console.log(null >0);
console.log(null == 0);
console.log(null >=0);


console.log(undefined >0);
console.log(undefined == 0);
console.log(undefined <0);



// the reason is that an equality check  == and comparisons ><>=
// <= work differently
// comparisons convert null to a number treating it as 0 
// that's why (3)null >= o is true and (1) null >0 is false 

/*
  === Strict equality data type and value both check 
  == only one thing check 
*/


console.log("2" === 2);
