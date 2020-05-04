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
router.post('/', function(req, res, next) {
    
    const { begindate, enddate } = req.body;
    console.log(req.body.begindate);
  
    pool.query('SELECT * FROM sick_time WHERE requestdate >= $1 AND requestdate <= $2', 
		  [begindate, enddate], (error, results) => {
		  if (error) {
              throw error;
              console.log(error);
		  }
		  res.status(200).json(results.rows)
		  })
    });

module.exports = router;