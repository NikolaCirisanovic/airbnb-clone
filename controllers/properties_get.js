// Database
const db = require('../db')

module.exports = (req, res) => {
	let query = `SELECT * FROM properties`
	db.query(query, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
}
