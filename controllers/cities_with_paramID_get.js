const db = require('../db')

module.exports = (req, res) => {
    db.query(`SELECT * 
    FROM properties WHERE city = ${req.params.id}`, (err,result) => {
        if(err){
            console.log("nope")
        } else {
            res.send(result.rows)
        }
    })
}