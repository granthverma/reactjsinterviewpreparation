const tinderUser = new Object () ; // single ton objects 
// const tinderUser ={} // non single ton

tinderUser.id ="123abc"
tinderUser .name = "Honey"
tinderUser.isLoggedIn =false


// console.log(tinderUser);

// jscourse/hiteshsir/02_basic/05_objects.js

const regularUser = {
    email :"some@gmail.com",

    fullname:{
        userfullname: {
            firstname : "himanshu",
            lastname : "choudhary98"
        }
    },
   location :{
    fulladdress:{
        address: "Plot no 23 Mansorver Jaipur" ,
    }
   }

}
// console.log(regularUser.location.fulladdress);
// console.log(regularUser.fullname.userfullname);
//  there we create object ke object  


const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4 :"b"}

 const obj4 ={5:"a",6:"b"}


// const obj3 ={ obj1 , obj2}

const obj3 =Object.assign({},obj1 ,obj2 ,obj4)  // this assign value n one things so we use in {} for this


const obj5 ={...obj1 ,...obj2 ,...obj4}  // spread opertor we use  for add values


// console.log(obj3);

// console.log(obj5);

// value got from data base  array of object aayege always

const user =[
    {
        id :1 ,
        email:"a@gmail.com ",
    },
    {
        id :1 ,
        email:"a@gmail.com",
    },
    {
        id :1 ,
        email:"a@gmail.com",
    },
    {
        id :1 ,
        email:"a@gmail.com",
    }

]

// users[1].email;

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // agar tum ko keys chaiya toh tum .keys ka use kar sakta ho 
// console.log(Object.values (tinderUser)); // agar tum ko value chaiya toh tum values le saket ho 
// console.log(Object.entries(tinderUser)); // hum entries mil jata har value ko array main convert kar deti hai 

// console.log(tinderUser.hasOwnProperty(`isLoggedIn`)); // for check this value hai ya nahi 
// jscourse/hiteshsir/02_basic/05_objects.js


// ++++++++++++++++++++++++++++++ part 3   -->

const course = {
   coursename : "js in hindi",
   price : "999",
   courseInstructor : "hitesh"


}

const {courseInstructor: instructor} =course

console.log(instructor);

console.log(instructor);  //  object de-structure es hai bolta hai 

// const navbar = {} => {

// }
// navbar(company ="hitesh")

// {
//    "name":"hitesh",
//    "coursename" "js in hindi",
//    "price" :"free"


// }

// 


// ++++++++++++++++++++++ - api -> jab bhi  aapko aapne kaam kaise aur par dala dena us hum api kha tha hai
// yha key aur value dono string hoti hai 
//  json mostly for api 


// {
//     "name":"himanshu",     api exmple
//     "ch" :"kuchbhi"
// }


// [
//     //    {},
//     //    {},
//     //    {},
    
//     // ]