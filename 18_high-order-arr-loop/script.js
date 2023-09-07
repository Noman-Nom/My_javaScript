//  for off loops in js 
// const numbers = [1,2,3,4,5]
// for (const num of numbers) {
//     console.log(num)
// }


// const greetings = "Helo world"

// for (const greets of greetings) {

//     console.log(`char of greet are,  ${greets}`)
    
// }
// const greetings = "Helo world"

// for (const greets of greetings) {
// if (greets == " ") {
//     continue
// }
//  else{
//     console.log(`char of greet are,  ${greets}`)
//  }
    
// }


const map = new Map()

map.set('pk', 'pakistan' )
map.set('in', 'india' )
map.set('dxb', 'dubai' )
 
for (const [key,value] of map) {
    console.log(key , ';-', value)
}


// object par for of loop nahi laga sakte hen us k lie for in lagaya jata he 