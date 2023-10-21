/**
 * for of loop -->iterator (बार बार आनेवाला)) of object kisi par lagan chaiya
 * basic name 
 * kaise par loop lagan hai 
 * ["" ,"" ,""] 
 * [{},{},{}] array mein  objects 
 * 
 * -->forof direct value deti
 * 
 * -------------->  maps
 * maps ek object hai 
 * map object hold key value pairs 
 * remembers the original insertion order of the keys
 * any value both objects and primitive value may be used as either a key or a value
 * 
 * insertion kaise hota hai 
 * koi bhi dubiclate nahi hota hmesh uqine value hoti hai
 * 
 * 
 */


const arr = [1,2,3,4,5 ,7]


for (const num of arr) {
    // console.log(num);
}
// jscourse/hiteshsir/05_iterations/three.js

const greetings ="hello worldl" 
for (const greet of greetings) {
    // console.log(greetings);
    // console.log(`Each char is ${greet}`);
    
}
// basic things of map 

const map =new Map ()
map.set (`In` ,"India");
map.set (`USA` , "United States of America");
map.set (`Fr` ,"France");

// console.log(map);

// kuch bhi repeat nahi hota aur jaise set value de raha ho us main aati hai

// for (const key of map) {
//     console.log(key); 
    
// }
// result  --> 
// [ 'In', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ] puri value ek sath aa gayi value alag alag chaiya thi but sath mein aagayi  tho uske bhi way chalo dekha tha hai


for (const [key, value]  of map) {
    // console.log(key, `:=`, value);
    
}
// result  -->  alag print ho gaya yha key alag hai aur value bhi
// In := India
// USA := United States of America
// Fr := France


// const myObject ={
//    "game1":"Nfs" ,
//    "gmae2":"coding"

// }

// for (const [key,value] of myObject) {
//     console.log(key ,"=" ,value);
    
// }

// object es interates nahi hota hai  for if wale work nahi karte hai  forin helpful in condation