/**
 * map ---->  The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values)
 *            may be used as either a key or a value.
 * automtic retun vales 
 * for each better acc hs
 * 
 * 
 * 
 * /  chaining ---> do theen method ek sath use kar sakta ho 
 */

const myNumers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumers.map ((num) => {return num +10})

// console.log(newNums);


//  chaining ---> do theen method ek sath use kar sakta ho 


 const newNums =myNumers
                    .map ((num) => num* 20)
                    .map ((num) => num +5)
                    .filter((num) => num >= 40 && num <= 100)


                    console.log(newNums);
    


