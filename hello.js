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