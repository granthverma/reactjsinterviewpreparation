class User {
    constructor(username){
        this.username =username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);

    }
}


class Teacher extends User {
    constructor (username ,email , password)
   {
    super(username) // this do everythings
    this.email=  email 
    this.password =password

}
    // for add course
   addCourse(){
    console.log(`A new course was added by ${this.username}`);
   }
}


const chai = new Teacher("chai" , "chai@teacher.com", "123")


chai.logMe()
const masalaChai = new User("masalachai")

masalaChai.logMe()

console.log(chai instanceof User);
// jscourse/hiteshsir/10_classes_and_oop/inheritance.js


// jscourse/hiteshsir/10_classes_and_oop/inheritance.js