const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connection, DbService } = require("./dbService")



dotenv.config()



const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// create

app.post('/insert', (request, response) => {
    const db = DbService.getDbServiceInstance()
    const result = db.insertAPerson(request.body)
});


//read

app.get('/getAll', (req, response) => {
    const db = DbService.getDbServiceInstance()
    const result = db.getAllData()

    result
        .then(data => response.json({ data: data }))
        .catch(err => console.log(err))

    response.json("message: Res send")

});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/Login.html");


})

app.post("/candidate", (req, res) => {
    console.log(req.body.id)
    connection.query(`SELECT * FROM candidate where cand_id=${req.body.id};`, (err, result) => {
        if (err) throw err
        connection.query(`SELECT * FROM person where ssn=${result[0].cand_id};`, (err, result2) => {
            if (err) throw err
            res.send({ result: result2 })
        })
    })
})



app.post("/desc1", (req, res) => {
    console.log(req.body.id)
    connection.query(`SELECT * FROM candidate where cand_id=${req.body.id};`, (err, result) => {
        if (err) throw err
        res.send({
            result: result
        })
    })
})

app.post("/num_of_votes", (req, res) => {
    connection.query(`SELECT * FROM candidate where cand_id=${req.body.id};`, (err, result) => {
        if (err) throw err
        res.send({
            result: result
        })
    })
})

// login

app.post("/voter-login", function (req, res) {
    var username = req.body.voter_username;
    var password = req.body.voter_password;
    connection.query("SELECT * FROM voter where voter_username = ? and voter_password = ? ", [username, password], function (error, results) {
        if (results.length>0) {
            res.json(results[0])
        } else {
            res.json({})
        }
        res.end();
    })
})

app.post("/man-login", function (req, res) {
    var username = req.body.man_username;
    var password = req.body.man_password;
    connection.query("SELECT * FROM manager where man_username = ? and man_password = ? ", [username, password], function (error, results) {
        if (results.length) {
            res.redirect("http://localhost:5500/client/Admin/adminHome.html")
        } else {
            res.redirect("http://localhost:5500/client/Admin/manLogin.html")

        }
        res.end();
    })
})

app.post("/vote", function (req, res) {
    var voter_id = req.body.voter_id;
    var cand_id = req.body.cand_id;
    console.log("lkhjkl" +cand_id)
    connection.query("UPDATE candidate SET candidate.num_of_votes = candidate.num_of_votes + 1 WHERE cand_id = ?", [cand_id], function (error, results) {
        res.json({});
    })
})

app.post("/sign-up", function (req, res) {
    var { name, username, password, gender, address, age, ssn } = req.body;
    try {
        connection.query("INSERT INTO person (name, ssn, address, age, gender) VALUES (?,?,?,?,?)", [name, ssn, address, age, gender], function (error, results) {
            connection.query("INSERT INTO voter (voter_id, voter_username, voter_password) VALUES (?,?,?)", [ssn, username, password])

            res.redirect("http://localhost:5500/client/Voter/Login.html")
  

        })
    } catch (e) {
        console.error(e.message)
    }
})






/**
 * 
 *         connection.query("SELECT numoofvotes from candicate", function (error, results) {
 *              console.log(result)
 *              var num = results[0].num_of_votes
                connection.query("UPDATE candite SET numofvo = num voter (voter_id, voter_username, voter_password) VALUES (?,?,?)", [ssn, username, password])
         
 * 
 * 
 */
//when login is success
app.get("/home", function (req, res) {
    res.sendFile(__dirname + "/home.html")

})

//update



//delete

let port = process.env.PORT || 8080

app.listen(port, () => console.log("App is runnning at port: " + port));
