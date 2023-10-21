/**
 * reduce --> 
 * The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.
 * empty array 
 * accumulator -->   initial use value pata nahi hoti starting mein toh  depends on things wo value le leta 0
 *                   jo bhi current value 0+1 = 1  --accumulator  now ye ho jayi ghi value 
 *                   toh hum bol skat hai ki  accumulator value store kar ke deta hai 
 *     , ke baad value deta hai wo aajati hai 
 * 
 * current value  --> present value array
 */


const myNums =[1,2,3]

// const myTotal = myNums.reduce(function (acc ,currval) {
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc + currval
    
// },10)


// const myTotal = myNums.reduce((acc ,curr => acc+curr, 0 ))

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);