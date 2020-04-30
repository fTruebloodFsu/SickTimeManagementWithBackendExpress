var Pool = require('pg').Pool
var express = require('express');
var router = express.Router();


const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
})

/* GET users listing. */
router.get('/', function(req, res, next) {
	pool.query('SELECT * FROM sick_time ORDER BY id ASC', (error, results) => {
		if (error) {
		  throw error
		}
		res.status(200).json(results.rows)
	  })
})

module.exports = router;
