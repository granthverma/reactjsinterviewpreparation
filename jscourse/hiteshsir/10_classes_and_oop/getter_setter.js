class User {
    constructor  (email , password ,name)
   {
    this.email =email;
    this.password =password ;
    this.name =name;
   }
// get the value 
   get email(){
    return this._email.toUpperCase()
}
//  set the value 
  set email(value) {
    this._email = value
  }

  get password (){
    return `${this._password}xhuyedhak`
  }

  set password(value){
    this._password = value 
  }
 
  get name (){
    return `${this._name}jojo`
  }

  set name(value){
    this._name = value 
  }
}

const granth = new User("granth@webdev.com" ,"hjk" , "koko")

console.log(granth.email);
console.log(granth._email);
console.log(granth._password);
console.log(granth.password);
console.log(granth.name);
console.log(granth._name);

/**
 * jscourse/hiteshsir/10_classes_and_oop/getter_setter.js
 * getter - The get syntax binds an object property to a function that will be called when that property is looked up. 
 * set -The Set object lets you store unique values of any type, whether primitive values or object references
 *  aam bhasha mein get  se get hoti hai value 
 *  set se set hoti hai value 
 *  constructor and gettet and setter mein race nahi ho isliya  _ ya koi name mein change 
 *  pahle milti hai value phir deta hai hum value 
 * 
 * constructor jo bhi operation hoga wo is mein hoga 
 * 
 *  set name(value){
    this.name = value 
  }

   set karte time dhayan de ki hum value set karni hai () value aayigi
 */



//   get value 



