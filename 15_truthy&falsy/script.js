//  truthy and falsy ko koi operator se check nahi karwaya jata he

// // const userEmail = "noman5456318@gmail.com"
// const userEmail = "";

// if (userEmail) {
//   console.log("email is recieved");
// } else {
//   console.log("email not recieved");
// }

// const emptyArr = [4 , 6 ,8];
const emptyArr = [];
// if (emptyArr) {
//   console.log("arry is not empty");
// } else {
//   console.log("arry is empty");
// }

//  par yahan par to arry empty he
// ye is lie ese aya  he q k empty arr truthy value he


if(emptyArr.length===0){
    console.log("arry is empty")
}else{
    console.log("arry is not empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length===0){

    console.log("object is empty")
}
else{
    console.log("object is not empty")
}