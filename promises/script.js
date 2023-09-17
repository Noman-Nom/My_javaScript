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
        // console.log(user)
})

const promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        // let error = true
        if(!error){
            resolve({userName:"noman",pass:123})
        }else{
            reject("Error: something went wrong")
        }
    },1000)
   

})

promise4.then((user)=>{
        // console.log(user)
        return user.userName
})
.then((userName)=>{
        // console.log(userName)
})
.catch((error)=>{
// console.log(error)
})
.finally(()=>{
    // console.log("The promise is either resolved or rejected")
})

//  promise 5 

const promise5 = new Promise((resolve,reject)=>{
setTimeout(()=>{
    // let error = false
    let error = true
    if(!error){
        resolve({language:"javascript",pass:123})
    }else{
        reject("Error: something went wrong")
    }
},1000)
})

async function consumePromiseFive(){
    try {
        const response = await promise5
        console.log(response)
        
    } catch (error) {
        console.log(error)
        
    }
}

// without try and cathc
// async function consumePromiseFive(){
//     const response = await promise5
//     console.log(response)
// }
consumePromiseFive()
