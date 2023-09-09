const languages = ["cpp" , "c#", "java" , "javascript" , "python"]

const data = languages.forEach((item)=>{
    // console.log(item)
    return item

})
// console.log(data)

// for each loop kabhi bhi return nahi karta he 

//  filter method 

const myNums = [1,2,3,4,5,6,7,8,9,10]

const values = myNums.filter((num)=>{

    // any operations
   return num >=4

//    { } in ko js men scope kaha jata he agar apne scop use kia he to return use karna pare ga 

})

// console.log(values)


const newNums = []
myNums.forEach((num)=>{
        if(num>4){
            newNums.push(num)
        }
}) 

console.log(newNums)
