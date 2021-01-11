console.log("Start Group")

let a = "I am Async"

setTimeout(function () {
    console.log(a);
}, 2000)


console.log("End Group")

//The output is Start Group , End Group, I am Async....  I am Async will appear after 2 seconds.
//settimeout is web API for asycn programming.


function success() { console.log("success") };
function failure() { console.log("failure") };
function check(userinput) {
    new Promise(function (resolve, reject) {
        if (userinput) {
            resolve()
        } else {
            reject()
        }
    })
}

check(true)