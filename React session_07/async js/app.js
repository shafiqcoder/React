//synchronous means it runs line by line.
//callback is a funciton which calls another fucntion when it is called.
console.log("Start Group")
let a = "I am Async"
setTimeout(function () {
    console.log(a);
}, 2000)
console.log("End Group")
//The output is Start Group , End Group, I am Async....  I am Async will appear after 2 seconds.
//settimeout is web API for asycn programming.
// ----------------------------------------------
const anyFunction = () => { return Math.floor(Math.random() * 10) % 2 === 0 ? true : false; }
//Let this is dummy API call which returns true or false.

const resolve = () => console.log("success");
const reject = () => console.log("failure");
const result = new Promise((resolve, reject) => {
    setTimeout(() => (anyFunction() ? resolve() : reject()), 2000);
});
result.then(resolve).catch(reject);
console.log("I will be printed anyway, and before async fn.")
// ------------------------------------------
let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("New Promise");
        resolve()
    }, 1000)

})
// then for success catch for failure
//We can add more than 1 , Tree of then. Return of every .then becomes input of next .then
myPromise.then(function () {
    console.log("Success");
    return 2
})
    .then(function (val) {
        console.log(val)
        return val + 2
    })
    .then(function (val2) {
        console.log(val2)
    })
    .catch(function (error) {
        console.log("Error");
    })
    //_________________________________________________________
//Async-Await

