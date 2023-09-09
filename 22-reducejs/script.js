const myNumbers =[1,2,3]

//  accumulaator example
const myTotal = myNumbers.reduce((accumulatorValue , currentValue)=>{

    console.log(`accumulator value : ${accumulatorValue} , currentValue : ${currentValue}`)

    return accumulatorValue + currentValue
},0)

console.log(myTotal)


// shoping cart example 
// add the price of all items

const shopingCart =[
    {
        item : "Shoes",
        price: 5000
    },
    {
        item : "Shirt",
        price: 1200
    },
    {
        item : "Bag",
        price: 2500
    },
    {
        item : "AirPod",
        price: 6300
    },
]

const TotalPrice = shopingCart.reduce((accumulatorValue,item)=>{
    console.log(`acc value: ${accumulatorValue} , item price : ${item.price}`)

    return accumulatorValue + item.price

},0)

console.log( "Total Price :- ", TotalPrice)