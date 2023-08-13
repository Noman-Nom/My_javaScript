// const arr = [1 , 2, 3 ,4 ,5 ,6 ]
// const myFrnds= ["ibraheem" , "Raza" , "Ahmed" , "Waqas"]
// const myArr2 = new Array(1, 2, 3 ,4 ,5)

// console.log(arr[2])

// methods
//  arr.push(9);  // is sse add hojata he arr men 
 
// arr.pop() // it will delete the last element from tha arry
// arr.unshift(12); // ye arr k start mn add kr deta he pr ye useful nhi he ziada 
// arr.shift(); // remove from start of arr


        // console.log(arr.includes(56)); /// ye check kare ga k ye mojod he ya nhi he 
        
        // const newArr = arr.join() // ye convert kar de ga arr ko string me 
        // console.log(arr);s
//   console.log(newArr); 
//   console.log(typeof newArr)

// console.log("A", arr)  // original arry 
// console.log("B", arr)
// const myNewArr1 = arr.slice(1,3)
// console.log(myNewArr1)

//  in men bht bara difference he 

// console.log("c", arr)
// const myNewArr2 = arr.splice(1,3)
// // console.log(arr)
// console.log(myNewArr2)



// little bit complex

const my_frnds1 = ["ibraheem", "yaseen" , "Raza"];
const my_frnds2 = ["Ahmed", "Waqas" , "Umair"];
// my_frnds1.push(my_frnds2)
// console.log(my_frnds1)
//  yahan par problm ye hoi he k ak arry men dosra arry shamil hogya he 

//  is ki jagh hum concate use kar sakte the 

//  const all_Frnds = my_frnds1.concat(my_frnds2);
// console.log(all_Frnds);

//  concate k bad new variable men save krwana zarori tha 

// more easy method 

// const all_Frnds = [...my_frnds1,...my_frnds2]
// console.log(all_Frnds)

//  iskja faida ye he k hum more then two arry ko bhi combine kar sakte hen 


// rare cases

// const another_arr = [1,2,3, [7,8,9], [4,9, [5,8]]]
// const solve_another_arr = another_arr.flat(Infinity);
// console.log(solve_another_arr)


// console.log(Array.isArray("Noman"));
// console.log(Array.from("Noman"));

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3))