//how to create or declare al variable 
var a = 2
console.log(a)

var a = ['hello world',12.2,23,44,true]

console.log(a)

a.pop()

console.log(a)

a.push("dream car")
console.log(a)


// var s = 5
// var n = 10

// do{
//     console.log(s)
// }while (i<=s)


var colors = {
    primery : "green",
    secondry : "blue",
    lastColor : "while"
}

for(color in colors){
    console.log(color+ ' -> ' + colors[color])
}

//with array print for in loop
var colorarr = ['green','blue','white']

for(color in colorarr){
    console.log(color[colorarr])
}



//with array fprint for of loop 
var cars = ['audi','BMW','tata safari','jaguar']

for(var car of cars){
    console.log(car)
}


//how to declare of call the function in js 
function greet(){
    console.log("hello we are in function")
}

greet()

//how to declare parameters in function  in js 
function add(a , b){
    console.log(a+b)
}

add(34,1)

//how to use function with expression 
// var a = 2 + 4
// console.log(a)

var sum = function (a,b){
    // console.log(a+b)
    return a+b
}

add(2,5)

// in this how to use let and  const key word 
if(true){
    let g = 30
    console.log(g)
}
// console.log(g)

//to use a const keyword not redeclare it holds the constant value in var 
const d = 45;
console.log(d)


//let's create an arrow functions 
let arrowfun = ()=>{
    console.log("we are inside the hello function")
}

//
const vale = 5
const valeSqare = vale*vale

let isEven

if (valeSqare % 2 == 0) {
    isEven = false
}else{
    isEven = false
}

console.log(isEven)



