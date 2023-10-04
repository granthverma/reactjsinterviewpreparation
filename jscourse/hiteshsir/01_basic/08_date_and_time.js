// date  main mainly days 1-31 , months hota hai 12 , year n hota hai hours mintus sec bas yha hota hai es khelna hai 

// date object hoti kuiki ek baar sari baat ho rahi 
let myDate = new Date ()
// console.log(myDate);  // 2023-10-04T09:15:20.305Z by  defaults
// console.log(myDate.toString());  //  readble show local time Wed Oct 04 2023 14:47:44 GMT+0530 (India Standard Time) 

// console.log(myDate.toDateString ());  // datestring date hai milgi 

// console.log(myDate.toLocaleString());  //  local string  local format main aa  gaya time 

// console.log(myDate.getDate()); // 4 get  date 
// console.log(myDate.getDay()); // 3 because it start from 0
// console.log(myDate.getFullYear()); // you got year 
// console.log(myDate.getHours());  // 14 total till now 
// console.log(myDate.getMilliseconds ()); //get millsecons 310
// console.log(myDate.getMinutes ()); // get minutes  56
// console.log(myDate.getMonth ()); // beacause start with 0 you got months 9
// console.log(myDate.getSeconds ()); // whatever second 

// console.log(myDate.getTime()); // total seconds 
// console.log(myDate.getTimezoneOffset ()); // -300
// console.log(myDate.getUTCDate ());// date 
// console.log(myDate.getUTCDay());  // 3 


// console.log(typeof myDate); type of date object hota hai 

// let myCreateDate = new Date (2023 , 0, 23) // months start with zero in single digit
// console.log(myCreateDate);
// console.log(myCreateDate.toLocaleString());


// let myCreateDates = new Date (2023 , 0, 23 ,5,3)
// console.log(myCreateDates.toLocaleString());


let myCreateDatess = new Date ("2023-01-14")
// console.log(myCreateDatess.toLocaleString());



let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDatess.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth ()+1);

// string interpolation `${(newDate.getDay() and the time}`

// newDate.toLocaleString (`default` ,{
//     weekday: "monday",
//     date: 12-2-23,
// })

// console.log(newDate);