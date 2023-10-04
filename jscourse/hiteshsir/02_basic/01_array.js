// array 
/*
  [] --> this Array
      >>>> index start with 0 
      js array copy operation hoga tho  create shallow copy create hoga 
       --->  Shallow copy  --> shallow copy of an object is a copy  whose properties share the same reference 
       jo bhi change hoga original array main bhi hoga

       --->  deep copy -> original main nahi  copy elements main change hota hai 


      */

    //    ---------------------------------------------------------------------

    // how to  declear  array

    const myArr =[0,1,2,3,4,5] //for number we use this methods

    const myCity =["ajmer" ,"pune","jaipur","dehli"]  // for string this methods 


    const myArr2 = new Array (1,2,3,4)

    // console.log(myArr[3]);

    // console.log(myCity[3])

    // console.log(myArr2[0]);


    // method in array 

    /* 1 push --- > add the value to the end 
       2 pop   ----> remove value from the end 
       3 unshift --->  adding the  value  in starting
       4 shift ---> removing the value from starting  , no parameter there
       5 includes ---> check karna ke liya use kiya jata ki wo value hai ya nahi its show boolen value true n false 
       6 indexOf -----> show the index par kya value hai nahi hogi toh -1 show hogi
       7 join   ---->  add all the elements of an array into a string 
       8 slice -----> totna  copy array ko impect karta hai
       9 splice  -----> p jodna original array ko impact karta hai 
    */


    // const myArr =[0,1,2,3,4,5]

    // myArr.push(7)
    // console.log(myArr);

    // myArr.pop()
    // console.log(myArr);

// myArr.unshift(8)
// console.log(myArr);


// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(5));

// console.log(myArr.indexOf(1));

// const newArr =myArr.join ()
// console.log(myArr);
// console.log(newArr);


// slice, splice


console.log("A" , myArr);

const myn1 = myArr.slice(0,3)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice (0,3 )
console.log("C ", myArr);
console.log(myn2);