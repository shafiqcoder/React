console.log("Start Group")

let a = "I am Async"

setTimeout(function () {
    console.log(a);
}, 2000)


console.log("End Group")

//The output is Start Group , End Group, I am Async....  I am Async will appear after 2 seconds.
//settimeout is web API for asycn programming.