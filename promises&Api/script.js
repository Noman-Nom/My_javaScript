// promises

// const promis1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//             console.log("promise 1 ")
//     },1000)
// })

// promis1.then(()=>{
//     console.log("promise is resolved")
// })

const promis1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("promise 1 ")
    resolve();
  }, 1000);
});

promis1.then(() => {
  // console.log("promise is resolved")
});

//  promise 2

new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("promise 1 ")
    resolve();
  }, 1000);
}).then(() => {
  // console.log("promise is resolved")
});

// promise 3
const promis3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({user:"noman", gmail: "abc@gmail.com"})
  }, 1000);
});

promis3.then((data) => {
  // console.log(data)
});

//  promise 4

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ user: "noman", gmail: "abc@gmail.com" });
  }, 1000);
});

promise4.then((data) => {
//   console.log(data);
  return data.user;
})
.then((user)=>{
    // console.log(user)

})


//  
const  promise5 = new Promise((resolve,reject)=>{
                setTimeout(()=>{
                        // let error = true;
                        let error = false;
                        if(!error){
                            resolve({userName:"noman",pass:123})
                        }else{
                            reject("Error: something went wrong")
                        }
                },1000)
})
promise5.then((user)=>{
    // console.log(user)
})
.catch((error)=>{
            // console.log(error)
})
.finally(()=>{
    // console.log("Apun BAP he")
})

// 
const  promise6 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
            // let error = true;
            let error = false;
            if(!error){
                resolve({userName:"noman",pass:12367887})
            }else{
                reject("Error: something went wrong")
            }
    },1000)
})

        async function comsumePrmise6(){
            try {
                const response = await promise6
                console.log(response)
                
            } catch (error) {
                console.log(error)
            }
        }
        comsumePrmise6()

        