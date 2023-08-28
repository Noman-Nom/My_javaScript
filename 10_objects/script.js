const tinderUser={}


tinderUser.id = "123abc"
tinderUser.name = "Noman"
tinderUser.email = "noman@gmail.com"
tinderUser.isLoggedIn = false

// console.log(tinderUser);s

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname)

// Addition of two objects 

const object1 = {
    1: "a",
    2: "b"
}
const object2 = {
    3: "c",
    4: "d"
}
const object3 = {
    5: "e",
    6: "f"
}

//  method 1 jis meen ak object ak andar dosra object ata he which is not good 
// const object4 = {object1 , object2 , object3}
// console.log(object4)

// method 2  efficient and useful method 

// const object4 = {...object1, ...object2, ...object3}
// console.log(object4)


// more use full methods and techniques of objects 
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser)) 

