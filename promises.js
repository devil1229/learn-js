// let p1 = new Promise((resolve, reject) => {
//     console.log("promise is pending")
//     setTimeout(() => {
//         console.log(" promise fullfilled")
//         resolve("p1 resolved")
//         console.log(p1)
//     }, 4000)
// })

// console.log(p1)

// let p2 = new Promise((resolve, reject) => {
//     console.log("promise is pending")
//     setTimeout(() => {
//         console.log(" promise rejected")
//         reject(new Error("Error has occured"))
//         console.log(p2)
//     }, 4000)
// })

// console.log(p2)

// p1.then((value) =>{
//     console.log("promise is resolved with value" + value)
// }, (error) => {
//     console.log("eroor occured with p1 promise")
// })

// p2.then((value) =>{
//     console.log("promise is resolved with value" + value)
// }, (error) => {
//     console.log("eroor occured with p2 promise")
// })

//promise  api

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1");
    }, 11000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("Value 2");
        reject(new Error("error Occured"))
    }, 2000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 3");
    }, 3000);
})


// let promise_all = Promise.all([p1, p2, p3])
// let promise_all = Promise.allSettled([p1, p2, p3])
// let promise_all = Promise.race([p1, p2, p3])
let promise_all = Promise.any([p1, p2, p3])
// let promise_all = Promise.all([p1, p2, p3])

promise_all.then((value) => {
    console.log(value)
})