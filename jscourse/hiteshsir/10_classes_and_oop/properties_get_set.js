/**
 * get set from properties
 * 
 */

function User(email , password) {
    this._email = email 
    this._password = password 


    Object.defineProperty (this, 'email', {
        get: function () {
            return this._email.toUpperCase()
            
        },
        set: function (value) {
            this._email = value
            
        }
    })





    Object.defineProperty (this, 'password', {
        get: function () {
            return this.password.toUpperCase()
            
        },
        set: function (value) {
            this.password = value
            
        }
    })
    
} 

const gobi = new User("gobi@jojo.com" , "chai")

console.log(gobi.email);

// console.log(gobi.password);

// jscourse/hiteshsir/10_classes_and_oop/properties_get_set.js