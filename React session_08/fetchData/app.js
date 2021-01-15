console.log("Fetch API")
//Get Method
async function getAPI() {
    const api = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    console.log(api, "This is API")//In this step this api is unreadable, We have to convert it into json format.
    const json = await api.json()//use await to make async , otherwise it will show pending state.
    console.log(json, "This is json")
}
getAPI()
//Post Method
async function postAPI() {
    const apiPost = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "post",
        body: JSON.stringify({
            title: "Bootable",
            body: "JavaScript",
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    console.log(apiPost, "API")
    const json = await apiPost.json()
    console.log(json, "json")
}
postAPI()
