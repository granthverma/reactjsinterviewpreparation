// six_filter_map_and_reduce.js
/*
foreach value return nahi karta hai 
-->>item - kah par only value return karna chatha hai toh foreach 

filter  --> jo true hoga wo hi pass hoga

The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array.

myNums.filter ( (num)=> num >4 {})
---->   filter
value deta hai 
call back , 
each access , condation deni hogi 
scope return karna hoga return keyword hoga  -->[]   {}
scope nahi toh () direct likha de aap


node jscourse/hiteshsir/05_iterations/six_filter_map_and_reduce.js


*/ 

// const coding = ["js" , "ruby" ,"java" ,"python" , "cpp"] 

// const values = coding.forEach ((item) => {
//     console.log(item);
//     return item 

// })


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter ( (num)=> {
//     return num >4 
// }) 

// console.log(newNums);



// const newNums = myNums.filter ( (num)=> num >4)

// console.log(newNums);


// const newNums = [];
// myNums.forEach ( (num) => {
//     if (num >4) {
//         newNums.push(num)
//     }
// })


// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let  userBooks = books.filter ((bk)=> bk.genre === 'History')

   userBooks = books.filter ((bk)=> {
    return bk.publish >= 1995 && bk.genre === "History"
    
})









  console.log(userBooks);