function Setusername(username) {
    // complex DB calls
    this.username= username
    
}

// set user name data base se call aata hai 


// create user 
function createUser(username ,email ,password){
    Setusername.call(this ,username)

    this.email =email
    this.password = password
}
   
// refernce hold karke rakan hai isliya call ek reference dena hoga 

const code = new createUser ("chai" , "code@jojo.com" , "123")

console.log(code);

// call ye jo hai  hamara  current excution contaxt  kisi aur function ko pass kar deta hai