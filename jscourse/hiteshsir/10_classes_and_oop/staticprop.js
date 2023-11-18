class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username:${this.username
        }`);
    }

    static createId() {
        return `123`
    }



}

const granth = new User("granth")
// console.log(granth.createId())

// jab magodb user  ka data aata toh us mein  automatic id aatch ho jati hai

// static -- use koi kaam ya particular koi code allow nahi karna cha tha ha toh hum use karte hai static


class Teacher extends User {
    constructor (username ,email){
        super(username)
        this.email = email

    }
}



const book = new Teacher("codewithgranth" ,"code@granth.com" ,)

book.logMe()



// 