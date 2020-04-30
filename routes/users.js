var Pool = require('pg').Pool
var express = require('express');
var router = express.Router();


const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
  	ssl: true,
//     user: 'gpxuxminieypwk',
//     host: 'ec2-18-233-137-77.compute-1.amazonaws.com',
//     database: 'djtftmcbe2ish',
//     password: '2061726a14e08075c9059dc387696a4b8583072d7b7132e8f344f0588b6c100f',
//     port: 5432,
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
