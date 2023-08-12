// console.log("hello");

// functions
// 1- fn decleration

// function square(number) {
// console.log("i'm here")
// return  number * number;
    
// }

// // 2- calling a function
// const result = square(6);
// console.log(result);

// Arrow function

// 
// const sayHi =(name)=>{
//         console.log(`Hi! ${name}`);
// }

// sayHi("Nom");

// const sqr =(num)=>{
//     return num * num;

// }

// const res = sqr(10);
// console.log(res);


// const sqr1 =(num)=>  num * num;



// const res1 = sqr(10);
// console.log(res1);



// ........................ litle bit complex.........

// function sayMyName (){

//     console.log("N")
//     console.log("O")
//     console.log("M")
//     console.log("A")
//     console.log("N")
// }

// sayMyName();

// for add two numbers

//  function addTwoNumbers(number1 , number2){
//            console.log(number1 + number2) ;
//  }
// addTwoNumbers(); 
// ye print kare ga NAN q k hum ne koi argument pass nahi kia he 


//  function addTwoNumbers(number1 , number2){
//            console.log(number1 + number2) ;
//  }
// // addTwoNumbers(3,4); 
// // addTwoNumbers(3, '4'); 
// addTwoNumbers(3, 'ab'); 


// most important concept releted to return 

//  function addTwoNumbers(number1 , number2){
//            console.log(number1 + number2) ;
//  }
//   const result = addTwoNumbers(3,4); 
//   console.log(result)  // is ka o/p undefine arha he q k ye result men is wakt koi value store he hi nhi 

// 
//  function addTwoNumbers(number1 , number2){
//             const result = (number1 + number2) ;
//             return result

//             console.log("muhammd ")   // ye kabhi bhi console nhi hoga q k return jo ak cheez hogai wo ab dobara se execute nahi ho sakti he 
//  }
//    const result = addTwoNumbers(3,7); 
//      console.log("Result! " ,  result);

// one more method 

//  function addTwoNumbers(number1 , number2){
//            return (number1 + number2) ;
//  }
// const result = addTwoNumbers(3,8); 
// console.log("Result! " ,  result);


// function useLoginMessage(username){

//     return `${username} you are loged in now`;
// }

// // console.log(useLoginMessage());
// console.log(useLoginMessage("Nom"));


// by using if statement to check if user enters its name then display login message 

function useLoginMessage(username){
    if(!username){
        console.log("please enter a user name ");
        return
    }
    else{
        return `${username} You are logged in now`;
    }
}
console.log(useLoginMessage(""));

// const a = "noman";

// console.log(typeof !a);







// 
