// Database
const db = require('../db')

module.exports = (req, res) => {
	let query = `SELECT
	properties.id,
	properties.name,
	properties.price,
	properties.rating,
	properties.city,
	properties.country,
	properties.image,
	country.country AS "country",
	city.city AS "city",
	type.type AS "type"
	
	FROM properties
	LEFT JOIN country ON properties.country = country.id
	LEFT JOIN city ON properties.city = city.id
	LEFT JOIN type ON properties.type = type.id`

	console.log(req.query)

	db.query(query, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
}
