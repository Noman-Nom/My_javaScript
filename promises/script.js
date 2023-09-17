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


// promise 3 handling with data 

const prom3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve({user:"M.Noman", UserEmail:"noman5456318@gmail.com"})
          
    },1000)

})

prom3.then((user)=>{
        console.log(user)
})