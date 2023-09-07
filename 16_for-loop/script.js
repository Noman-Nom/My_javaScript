// basic program 

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(i)
// }


// for loop  with if

// for (let i = 0; i <= 10; i++) {

//     if(i===5){
//         console.log("3 is my fvt number")
//     }
//     const element = i;

//     if (element === 9) {
//         console.log("9 is also my fvt number")

//     }

//     console.log(element)


// }


// loop with in the loop
// for (let i = 1; i <= 5; i++) {
//   console.log(`outer loop ${i}`)
//   for (let j = 1; j <= 5; j++) {
//    console.log(`inner loop ${j} and outer loop ${i}`)
    
//   }
    
// }



// ................usefull program...........

//   print the table of number 1 - 10

// for (let i = 1; i <=10; i++) {
//     console.log(`Table of ${i}`)

//     for (let j = 1; j <=10; j++){
//         console.log(`${i} * ${j} = ${i*j}`)
      
//     }
    
// }



//  break and continue in loops
console.log('break in loops')
for (let i = 0; i <=10; i++) {
    const element = i;
    if (element===6) {
        console.log("6 is detected")
        break
        
    }
    console.log( element)
    
}

console.log('continue in lops')
for (let i = 0; i <=10; i++) {
    const element = i;
    if (element===6) {
        console.log("6 is detected")
        continue
        
    }
    console.log( element)
    
}
