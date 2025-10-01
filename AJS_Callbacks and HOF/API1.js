// HTTP Request methods mdn web docs
// HTTP Response status codes
//MOCK API
//POSTMAN API

//First create workspace
//Second create collection
//Third create mock server: collection 3 dots create mock server get the link
//Fourth: add a get request under collection
            // under the same get request add example add the endpoint /stud1 and bottom 
            // and add json file 
//Fifth: add another get request and check it
        //  add mock server link/stud1 and send it and json file should be visible

// HTTP Requests
// get
const base_url = "https://76ecceaa-766a-4479-897a-013c4681c4d7.mock.pstmn.io/stud1"

async function getdata() {
    try {
        const data = await fetch(base_url)
        const res = await data.json();
        console.log("Get data=>", res)
    }
    catch(err) {
        console.error(err)
    }
}

//POST
async function postdata() {
    try{
        const data1 = await fetch(base_url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: 2, name: "Krishna" })
        });
        const res1 = await data1.json();
        console.log("POST DATA:=>", res1)
    }
    catch(err) {
        console.error(err)
    }
}
getdata()
postdata()