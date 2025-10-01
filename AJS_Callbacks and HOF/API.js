// Application programming interface: zomato,swiggy where the delivery boy has 
// reached we will find it in Map
// zomato -> API(security layer google apis) -> Google map
// zomato requests for map data through api to google map system
// success: failure: error in zomato we can find api

// Fetch API:
//     provides an interface for fetching (sending/receiving) resources
//     It uses Request and Response objects
//     fetch() method is used to fetch a resource(data)
    //    free api's link: free-api.github.io

    // let promise = fetch(URL,[options])
    // request=> API URL=>response
const url = "https://dog.ceo/api/breed/hound/images";
let promise = fetch(url)
console.log(promise)
// const getdata = async () => {
//     let container = document.getElementById("container")
//     console.log("Getting data....")
//     let response = await fetch(url)
//     console.log(response)
//     console.log(response.status)
//     let data = await response.json() //usable data
//     console.log(data)  
//     console.log(data.message[0])
//     let img = document.createElement("img")
//     img.src = data.message[0]
//     img.width = 300
//     container.appendChild(img)
// }
// document.getElementById("load").addEventListener("click",getdata)

//In the above code we can notice that pasting the api url in browser
// browser request and response: response for the api url is different
// above code: in console response for the api url is different

//AJAX: Asynchronous JS and XML
//  :In olden days if we are sending any network request request is in 
//   the form of xml
// But nowadays it will be in form of JSON. Data will be sent in the 
// form of JSON

// 1. Response will be in the form of JSON (not pure js object)
// 2. next step is to convert previous response to javascript object 
//     by using JSON() method
// JSON() method returns a second promise that resolves with the result Of 
// parsing the response body text as json

// free-apis.github.io