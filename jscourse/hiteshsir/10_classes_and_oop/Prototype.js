/*
  factory fnf  jo us create karna ke kaam aata hai
 */

// let myNmae ="himanshu"

// console.log(myNmae.length);

// jscourse/hiteshsir/10_classes_and_oop/Prototype.js


let myHeros = ["thar" ,"spiderman"]

let heroPower ={
     thor:"hammer",
     spiderman: "sling" ,

     getSpiderPower:function () {
        console.log(`Spidy power is ${this.spiderman}`);
        
     }
}

Object.prototype.granth = function () {
    console.log(`granth is prsent in all objects`);
    
}

Array.prototype.heygranth = function () {
    console.log(`granth says hello`);
    
}

heroPower.granth()
myHeros.granth()

//  array string ke property chal gayi ya de de


myHeros.heygranth()


// heroPower.heygranth()


//  only power array ko du power objects ke pass jayagi bhai se share nahi hoti power 


// inheritance विरासत  उत्तराधिकार


const User = {
    name :"chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo :true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport ={
    makeAssignment :"Js assignment",
    fullTime: true ,
    __proto__ :TeachingSupport
}


Teacher.__proto__ = User

// console.log(User);

// console.log(Teacher);

// console.log(TeachingSupport);


// modern syntax------------>>>>>>>>>




Object.setPrototypeOf(TeachingSupport ,Teacher)



let kuchbhi = "chalokarokarocode      "


String.prototype.trueLengthp= function () {
    console.log(`${this}`);
    console.log(`this length is:${this.trim().length}`);
    
}

kuchbhi.trueLengthp()
"hahahahahah".trueLengthp()
"hhahahahahhahahah".trueLengthp()
"kkkkkkkkkkkkk".trueLengthp()
// trueLength()
// trueLength()
