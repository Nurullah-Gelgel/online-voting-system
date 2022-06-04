const insertPersonForm = document.querySelector(".insert-person-form");
const manLoginBtn = document.querySelector("#man-login button");



function getCand(cand, id) {
    const candidate = document.querySelector(`#${cand}`);


    (async () => {
        let res = await fetch("http://127.0.0.1:5000/candidate", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id:id })
        })
        let res2 = await res.json()

        candidate.innerHTML = res2.result[0].name
    })()
}


function getVotes(candVote,id) {
    const numberVotes = document.querySelector(`#${candVote}`);
    (async () => {
        let res = await fetch("http://127.0.0.1:5000/num_of_votes", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
        let res2 = await res.json()
        numberVotes.innerHTML = res2.result[0].num_of_votes
    })()

}
getCand("cand1",2)
getCand("cand2",5)
getCand("cand3",11)
getVotes("numVotes1",2);
getVotes("numVotes2",5);
getVotes("numVotes3",11);



















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

