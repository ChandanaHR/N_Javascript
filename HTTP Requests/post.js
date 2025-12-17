function login() {
  fetch("https://da8d5684-ec9f-4ad2-987e-54e0f9a7b60b.mock.pstmn.io/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: "admin",
      password: "1234"
    })
  })
  .then(res => res.json())
  .then(data => console.log("Response:", data))
  .catch(err => console.error(err));
}