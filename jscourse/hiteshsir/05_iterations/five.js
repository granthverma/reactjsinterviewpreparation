/**
 * foreach --> window object part by defults part kar rakha hai 
 * high order function 
 * A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array
 * callbackfn
 * 
 * call back name nahi hota 
 * () har array par jayaga automaticlly sab
 * for each sab ko check karga
 */

const coding =[ "js" ,"ruby" ,"java ", "python" ,"cpp"]

// coding.forEach( function  (item) {
//     console.log(item);
// }

// coding.forEach( (value)=>{
//     console.log(value);
// })


// function printme(item) {
//     console.log(item);
    
// }
// coding.forEach(printme)

// phale funnction liya then foreach help se us executed kiya


// coding.forEach ( (item , index , arr) =>{
//     console.log(item , index ,arr);
// })



//es item aata aur bhi value hoti hai 
//  array main object --->>>>> array mein object ki property nikalli hum ne 


const myCoding = [
    { languageName: "javascript",
      languageFileName: "js"},

    { languageName: "java",
    languageFileName: "java"},

    { languageName: "python",
    languageFileName: "py"},
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})




