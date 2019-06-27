const db = require('../db')

module.exports = (req, res) => {
    db.query(`SELECT * FROM public.properties
    WHERE properties.plus = 'yes'`, (err,result) => {
        if(err){
            console.log("nope")
        } else {
            res.send(result.rows)
        }
    })
}