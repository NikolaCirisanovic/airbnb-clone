const db = require('../db')

module.exports = (req, res) => {
    db.query(`SELECT * 
    FROM public.country`, (err,result) => {
        if(err){
            console.log("nope")
        } else {
            res.send(result.rows)
        }
    })
}