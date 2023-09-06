// const user={

//     userName: "Muhammad Noman",
//     rollNo: 13,
//     welcomeMessage: function(){
//         console.log(`${this.userName}, Welcome to website`)
//         console.log(this)
//     }

    
    
// }

// user.welcomeMessage()

// user.userName = "Babar Azam"
// user.welcomeMessage();
// console.log(this)


// Arrow function

const welcomeMessage = ()=>{

    console.log("Welcome to website")
    console.log(this)
}
welcomeMessage()