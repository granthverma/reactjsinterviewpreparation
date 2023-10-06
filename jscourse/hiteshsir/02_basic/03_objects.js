/*
jab ek ki saari baat ho rahi hai tho wo hota objects
singleton  ---> construture se banaga toh hoga object literls se nahi hoga
objrct .create  ---> ye construture
{}  ---> ye hota hai objects 
object literls 
. value ko access karna ke liya aap . use karte ho



object ke objects 

-----------------------------
name :"xyz"
  |     |

 key     value













part 2 --> const tinderUser = new Object()   > singleton 
           const tinderUser = {}  > nonsingleton

         console.log(tinderUser)

         name ke andar jayom wo hai nesting 


         26 ->const obj3 ={obj1 , obj2}
             console.log(obj3)

           const obj3 =  object.assing({} target , obj1 , obj2 , obj4)
           console.log(obj3)
               


part 3 destuctring

object -->destuctring  

connst cou




 */


 

// object literls -->

const jsmission ={
    name :"himanshu",
    class: "jsbootcamp",
    time : 9,
    age:19,
     
    
}



// const course ={
//     coursename :"kobhi",
//     price :"9898",
//     courseCoach:"himanshu"
// }

// course.courseCoach  not got ways


const {courseCoach : Coach} =course
console.log(Coach);



const navbar = (Coach) => {

}

navbar (company ="hitesh")



//  appne kaam dusari par dalna hai api  api value  backend se aati hai  us handle kar hota hai aapko  , pahle xml main aati thi aur aba aati json main  jaon kya hota hai bhai {} --> yr kya bhai ye hai json hai bhai  but ye toh object hai na  , hai bhai ye json hota hai 



// course ={
//          "coursename" :"kobhi",
//        "price" :"9898",
//         "courseCoach":"himanshu" }
    


// api array
//  [{}



// ]

/*part one  main bataya gaya hai object kaise banaya jata hai 

*/


// +++++++++++++++++++++ part one 







