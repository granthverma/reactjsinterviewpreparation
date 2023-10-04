const score = 400 ;
// console.log(score);

// we can direct put value like number but hum hamesh  Number ,main use karne practice karge hum 

const balance = new Number (100);
// console.log(balance);

// Number --> ka use karo 

const rice =new  Number (110);
const dal = new Number (130 );

const roti =new  Number (20);
const aalu = new Number (130 );

const  panner =new  Number (50);
const  dahi = new Number (70);

const ladu =new  Number (20);
const water= new Number (20);

// console.log(rice *2 +aalu *1+water*2 +dahi *2 +roti *6+ "total balance  , thanku visting us" );


// console.log(balance.toString().length);


// toString().length);--> show length of number

// const totalamout  = new Number();

// totalamout = (rice *2 +aalu *1+water*2 +dahi *2 +roti *6+ "total balance  , thanku visting us" )

// console.log (balance.toFixed(2));



// (balance.toFixed(2)) 👉🏻 👉🏻 👉🏻 👉🏻 👉🏻 👉🏻 👉🏻  main value ke bada hum kitne digit chaiya wo batat tha hai fixed uske baad 2 digit liya do aayagi value mostly hum es e commerce platfrom par use karge

const num = 5.8892992229
const n =num.toFixed(2)

// console.log(n);

const otherNumber = 1439.678393

// console.log(otherNumber.toPrecision(5));

// toPrecision(5)  hindi word meaning परिशुद्धता के लिए  mtlab number ke shuddhat ke lie use kiya jata hai  ye hamesh . ke aage wale number ko  dekha kar use karta hai hai hum 


// ----------------------

  const money =1000000000
//   console.log(money.toLocaleString());


// console.log(money.toLocaleString(`en-IN`));

// toLocaleString()); ye mainly currency ke time use hota hai es main use currency show hota but aagar hum () jis main country ke value se currency le skat hai  


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);  //   math  library
// console.log(Math.abs(-4)); // neg become positive
// console.log(Math.round(4.5));  //  round of near & dear value  like .4 tk aage vali value and .5 +1 value 
// console.log(Math.ceil(4.6)); //  always choose top value 
// console.log(Math.floor(4.2)); // always  choose lower value
// console.log(Math.sqrt(9)); // square root the value 
// console.log(Math.min(3, 5, 1, 10 ,12, 1, 34, 56, 67,));//give us minimum value 
// console.log(Math.max(14, 13, 15, 16,17,99)); //give us maximum value


console.log(Math.random()); // math random give you always value between 0 to 1
console.log(Math.random()*10 + 1); // when we add 1 then give starting value one 

console.log(Math.floor(Math.random()*10) + 1) // always use correct way to code 


const min =10 
const max = 20

 
Math.random()*  (max-min+1)  //(max-min+1) aovid zero we add value 1 


//  now we want minimum value upper 10 so we add min 

// floow give use lower value near value 


console.log(Math.floor(Math.random()* (max -min+1))+min );

