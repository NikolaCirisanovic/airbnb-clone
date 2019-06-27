const db = require('../db')

module.exports = (req, res) => {
    db.query(`SELECT * 
    FROM public.city`, (err,result) => {
        if(err){
            console.log("nope")
        } else {
            res.send(result.rows)
        }
    })
}