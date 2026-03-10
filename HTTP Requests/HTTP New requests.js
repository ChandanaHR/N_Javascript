<!DOCTYPE html>
<html>
<head>
    <title>HTTP Methods Example</title>
</head>

<body>

<h2>HTTP Methods using Fetch API</h2>

<button onclick="getUsers()">GET Users</button>
<button onclick="addUser()">POST User</button>
<button onclick="updateUser()">PUT User</button>
<button onclick="deleteUser()">DELETE User</button>

<h3>Output:</h3>
<pre id="output"></pre>

<script>

const API = "https://jsonplaceholder.typicode.com/users";


// GET METHOD
function getUsers(){

fetch(API)
.then(response => response.json())
.then(data => {

document.getElementById("output").textContent =
JSON.stringify(data, null, 2);

})
.catch(error => console.log(error));

}



// POST METHOD
function addUser(){

fetch(API,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
name:"John Doe",
email:"john@gmail.com"
})

})
.then(response => response.json())
.then(data => {

document.getElementById("output").textContent =
JSON.stringify(data, null, 2);

})
.catch(error => console.log(error));

}



// PUT METHOD
function updateUser(){

fetch(API + "/1",{

method:"PUT",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
name:"Updated User",
email:"updated@gmail.com"
})

})
.then(response => response.json())
.then(data => {

document.getElementById("output").textContent =
JSON.stringify(data, null, 2);

})
.catch(error => console.log(error));

}



// DELETE METHOD
function deleteUser(){

fetch(API + "/1",{

method:"DELETE"

})
.then(response => {

document.getElementById("output").textContent =
"User Deleted Successfully";

})
.catch(error => console.log(error));

}

</script>

</body>
</html>
