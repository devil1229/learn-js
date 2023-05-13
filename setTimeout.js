let a = setTimeout(function(){
    console.log("timer is running 4")
}, 3000)

let b = setInterval(() => {
    console.log("timer is running")
}, 400);

setTimeout(()=>{
    clearInterval(b)
}, 4000)