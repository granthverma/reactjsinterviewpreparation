/**
 * how define propertiy  from getter and setter objectes 
 * uske context nahi hai isliya this  ka use kiya ja raha hau 
 * when we set something thne we need value 
 * 
 * _ its use for private property
 * in 2022 es mein # se hoga private property ka use 
 */


const User = {
    _email :'hjui@hjam.com' ,
   _password:"kiiia" ,


get email () {
    return this._email.toUpperCase()
    
},

set email(value) {
    this._email= value
}

}

const gogo = Object.create(User)
console.log(gogo.email);