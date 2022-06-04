const insertPersonForm = document.querySelector(".insert-person-form");
const manLoginBtn = document.querySelector("#man-login button");

const username = localStorage.getItem("username")

document.getElementById("voter_name").innerText = username + " - Voter Home"

function getCand(cand, id) {
    const candidate = document.querySelector(`#${cand}`);

    (async () => {
        let res = await fetch("http://127.0.0.1:5000/candidate", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
        let res2 = await res.json()

        candidate.innerHTML = res2.result[0].name
    })()
}






function getDesc(desc, id) {

    const description = document.querySelector(`#${desc}`);
    (async () => {
        let res = await fetch("http://127.0.0.1:5000/desc1", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
        let res2 = await res.json()

        description.innerHTML = res2.result[0].description
    })()

}



function button(buttonName, cand_id) {
    const element = document.getElementById(buttonName);
    element.addEventListener("click", myFunction);
    function myFunction() {
        document.getElementById(buttonName).innerHTML = "Voted";
        (async () => {
            let res = await fetch("http://127.0.0.1:5000/vote", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ voter_id: localStorage.getItem("userId"), cand_id })
            })
            let res2 = await res.json()
        })()
    }
}

getCand("cand1", 2)
getCand("cand2", 5)
getCand("cand3", 11)
getDesc("desc1", 2)
getDesc("desc2", 5)
getDesc("desc3", 11)
button("btn1", 2);
button("btn2", 5);
button("btn3", 11);


















/*

manLoginBtn.addEventListener("click", () => {
    window.location = "http://127.0.0.1:5500/client/Home.html";
})

/*
insertPersonForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/insert', { method: "POST" })
        .then(response => response.json())
        .then(data => console.log(data))
})


document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5000/getAll')
        .then(response => response.json())
        .then(data => loadHtmlTable(['data']));

})

function loadHtmlTable(data) {
    const table = document.querySelector('table tbody');

    if (data.length === 0) {
        table.innerHTML = "<tr><td class = 'no-data' colspan = '5'> No Data</td></tr>";
    }
}
function SignIn() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
}
*/

