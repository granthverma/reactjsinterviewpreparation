/* 
  object mein forin
  array mein forof
  object par loop -->  forin
  for (const key in object) {
   
}
forin key deta hai 

objects

*/

const myObject ={
    a :`apple`,
    b :`boy`,
    c :`cat`,
    d : `dog`,
}

for (const key in myObject) {
    // console.log(key );

    // console.log(myObject[key] ,key);
    // console.log(`${key} for ${myObject[key]}`);
   
}

// for print objects  -->

// jscourse/hiteshsir/05_iterations/four.js


const programming = ["js" ,"rb" , "py" ,"java" ,"cpp" , "cpp" ]

for (const key in programming) {
    console.log(key);
    
};

for (const key in programming) {
    console.log(programming[key] ,key);
    
}

// Array js 0
// rb 1
// py 2
// java 3
// cpp 4




// const map =new Map ()
// map.set (`In` ,"India");
// map.set (`USA` , "United States of America");
// map.set (`Fr` ,"France");



// for (const key in map) {
// console.log(key);
  
//     }


// //  map forin nahi chal  kuki iterator nahi hota