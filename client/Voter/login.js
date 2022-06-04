document.getElementById("voter-login").addEventListener("submit", (e) => {
    e.preventDefault();
    (async () => {
        const data = { voter_username: await document.getElementById("voter_username").value, voter_password: await document.getElementById("psw").value }
        let res = await fetch("http://127.0.0.1:5000/voter-login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let res2 = await res.json()

        localStorage.setItem("username", res2.voter_username)
        localStorage.setItem("userId", res2.voter_id)
        window.location.replace("Home.html")
    })()
})