// promises

// const prom1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Aysnc task is completed....!")
    

//     },1000)

// })

// prom1.then(()=>{
//     console.log("promise is consumed")
// })


// with resolve  
const prom1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log("Aysnc task is completed....!")
        resolve()
    

    },1000)

})

prom1.then(()=>{
    // console.log("promise is consumed")
})


// promise 2

new Promise((resolve,reject)=>{
    setTimeout(()=>{
            // console.log("promise Aysnc task 2")
            resolve()
    },1000)

}).then(()=>{
        // console.log("aync 2 resolved")
})


// promise 3 

const prom3 = new Promise