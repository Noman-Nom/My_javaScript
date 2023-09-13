const languages = ["cpp" , "c#", "java" , "javascript" , "python"]

// const data = languages.forEach((item)=>{
//     // console.log(item)
//     return item

// })



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
// myNums.forEach((num)=>{
//         if(num>4){
//             newNums.push(num)
//         }
// }) 

myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }

})
// console.log(newNums)




// console.log(newNums)

//  database se isi trha ka data ata he

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userBooks = books.filter((bk)=>{
//             return bk
//   })
//   const userBooks = books.filter((bk)=>{
//             return bk.genre === 'History'
//   })
  const userBooks = books.filter((bk)=> 
  
  {
      return bk.publish>=1987 && bk.genre === 'Science'  && bk.edition >= 2016
} )
// console.log(userBooks)

