var Pool = require('pg').Pool
var express = require('express');
var router = express.Router();


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Colby5892::PG',
    port: 5432,
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
