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