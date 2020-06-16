var Pool = require('pg').Pool
var express = require('express');
var router = express.Router();


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
})

/* GET users listing. */
router.post('/', function(req, res, next) {
    
    const { begindate, enddate, storenum } = req.body;
    console.log(req.body.begindate);
  
    pool.query('SELECT * FROM sick_time WHERE requestdate >= $1 AND requestdate <= $2 AND storenum = $3', 
		  [begindate, enddate, storenum], (error, results) => {
		  if (error) {
              throw error;
              console.log(error);
		  }
		  res.status(200).json(results.rows)
		  })
    });

module.exports = router;
