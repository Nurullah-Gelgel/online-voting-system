const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    //password:process.env.PASSWORD,
    database: "online_voting_system",
    port: process.env.DB_PORT
});
connection.connect((err) => {
    if (err) {
        console.log((err.message))
    }
    console.log('dbS ' + connection.state);
});

class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM person";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);

                })
            }
            )

            //console.log(response);
            return response;

        } catch (error) {
            console.log(error);
        }
    }

    async insertAPerson(data) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "INSERT INTO person (name, ssn, address, age, gender) VALUES (?,?,?,?,?)";

                connection.query(query, [data.name, data.ssn, data.address, data.age, data.gender], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);

                })
            }
            )

            //console.log(response);
            return response;

        } catch (error) {
            console.log(error);
        }
    }

}


module.exports = {
    DbService,
    connection
};