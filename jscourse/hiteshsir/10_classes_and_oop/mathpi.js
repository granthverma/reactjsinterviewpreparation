const descripter = Object.getOwnPropertyDescriptor (Math ,"PI")

// getOwnPropertyDescriptor  know about hidden things 
// console.log(descripter);


// console.log(Math.PI);
// Math.PI =5 
// console.log(Math.PI);


// node jscourse/hiteshsir/10_classes_and_oop/mathpi.js



// value: 3.141592653589793,
// writable: false,
// enumerable: false,
// configurable: false
// }

/**
 * pi ki value c++ fixed kar rakha hai na hum es
 *  overwrite kar sakat hai nahi hai  enumerable aur nahi hai 
 * configurable kar sakat hai islya ye value 3.14 fixed raha thi hai 
 * getOwnPropertyDescriptor ki help hum hidden property ke baar pata laga sakta hai 
 * 
 */

 const chai ={
    name :'hinger chai',
    price : 250 ,
    isAvailable: true
 }

 console.log(Object.getOwnPropertyDescriptor(chai , "price"));

//  two kisiki , aur kya  
//  chai  , name 

// defineProperty - use when we talk about one Property  
Object.defineProperty(chai ,'name' ,{
    //writable: false,
    enumerable: true,

})

console.log(Object.getOwnPropertyDescriptor(chai , "name"));


for (let [key ,value]  of Object .entries (chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} :${value}`);
    }
    
}