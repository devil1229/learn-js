let x = Math.random() * 100;
let c = 0
let a
do{
    a = prompt("guess the number: ")
    //a = Math.random() * 100;
    a = Number.parseInt(a)
    if(a > x){
        console.log("correct number is greater than ", a)
    }
    if(a < x){
        console.log("correct number is less than ", a)
    }
    c++
}while(a != x)

console.log("you guessed it correctly")
console.log("Your score is ", 100 - c)