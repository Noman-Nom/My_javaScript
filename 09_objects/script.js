const JsUser= {
    name : "muhammad Noman",
    "full name" : "Muhammad Noman", 
    age: 23,
    email: "noman5456318@gmail.com",
    loggedin : false,
    friends : ["Raza" , "Ibrahim"]
}


// console.log(JsUser.email)
// .notation bht ziada efficient nahi he 

// console.log(JsUser["email"])
// ye wlai ziada efffiecent he par use ziada . wali hoti he 

// reason why dot notation is not effiecent 

// console.log(JsUser.full name) error aye ga
// console.log(JsUser["full name"])


// more detail about objects

// changing is possible 

// JsUser.email = "nomiabc@gmail.com"

// console.log(JsUser.email)


// when changing is not possible 

// Object.freeze(JsUser)
// // freze k bad object mne changing possible nhi hoti he 
// JsUser.email = "nomiabc@gmail.com"
// console.log(JsUser.email)


// object with functions 


// function WelcomeMessage  () {
//     console.log(`welcome ${JsUser.name}`)
    
// }
// JsUser.greetings= WelcomeMessage();
// console.log(JsUser.greetings)

// 2nd method  

// JsUser.greetings = function(){
//     console.log(`welcome ${this.name}`)
// }

// console.log(JsUser.greetings())
