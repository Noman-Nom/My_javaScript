// function calculateCartPrice(num1){

// return num1

// }
// console.log(calculateCartPrice(2,3,4,5,6,7,7))

// is situation men ap kese acces karenge 



// by using spread 
// function calculateCartPrice(...num1){

// return num1

// }
// console.log(calculateCartPrice(2,3,4,5,6,7,))
// function calculateCartPrice(val1 ,val2,...num1){

// return (num1 )

// }
// console.log(calculateCartPrice(2,3,4,5,6,7,))

// output is different 


//  with objects 

// const user = {
//     name: "Muhammad Noman",
//     age : 23

// }

// function handleObject (anyObject){
//     console.log(`Hello  everyone my name is  ${anyObject.name} and i'm ${anyObject.age} yrs old   `)
// }

// handleObject(user)

// method 2
//  with objects 

const user = {
    name: "Muhammad Noman",
    age : 23

}

function handleObject (user){
    console.log(`Hello  everyone my name is  ${user.name} and i'm ${user.age} yrs old   `)
}

handleObject(user)