//chspter 5 practice set

//q1
// let arr = [1, 2, 4, 5, 6, 8, 9];
// let a= prompt("enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

//q2

// let arr = [1, 2, 4, 5, 6, 8, 9];
// let a;
// do{
//     a= prompt("enter a number")
//     a = Number.parseInt(a)
//     arr.push(a)
// }while(a !=0 )

// console.log(arr)

//q3
// let arr = [10, 2, 4, 50, 60, 8, 9, 37, 398, 90, 376];

// let a = arr.filter((ele) => {
//     return ele%10 == 0
// })
// console.log(arr)
// console.log(a)


//q4 
// let arr = [10, 2, 4, 50, 60, 8, 9, 37, 398, 90, 376];

// let a = arr.map((ele) => {
//     return ele**2
// })
// console.log(arr)
// console.log(a)

//q5
let arr = [1, 2, 4, 5, 6, 8, 3, 7, 9];

let a = arr.reduce((ele1 , lel2) => {
    return ele1 * lel2
})
console.log(arr)
console.log(a)