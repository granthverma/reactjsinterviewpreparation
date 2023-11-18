// //  es6  class is part es6 

// class User {
//     constructor(username ,email ,password)
// {
//    this.username = username;
//    this.email = email
//    this.password =password
// }

//        encryptPassword() {
//         return `${this.password}abc`
//        }
  
//        changeUsername(){
//         return `${this.username.toUpperCase()}`
//        }



// }
 
// const jojo = new User("jojo" , "jojo@koo.com ", "123")

// console.log(jojo.encryptPassword());
// console.log(jojo.changeUsername());

// console.log(jojo);

// jscourse/hiteshsir/10_classes_and_oop/myClasses.js


// behind the scene 

function User(username ,email , password) {
    this.username = username;
    this.email = email;
    this.password = password
    
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
    
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
    
}


const tea = new User("tea" ,"tea@gmail.com" ,"123")


console.log(tea.encryptPassword());
console.log(tea.changeUsername());


// method 