//  for off loops in js 
// const numbers = [1,2,3,4,5]
// for (const num of numbers) {
//     console.log(num)
// }


// const greetings = "Helo world"

// for (const greets of greetings) {

//     console.log(`char of greet are,  ${greets}`)
    
// }
const greetings = "Helo world"

for (const greets of greetings) {
if (greets == " ") {
    continue
}
 else{
    console.log(`char of greet are,  ${greets}`)
 }
    
}