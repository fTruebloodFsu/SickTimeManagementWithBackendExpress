//import { Pool } from 'pg';
var Pool = require('pg').Pool
var express = require('express');
var router = express.Router();


const pool = new Pool({
    user: 'gpxuxminieypwk',
    host: 'ec2-18-233-137-77.compute-1.amazonaws.com',
    database: 'djtftmcbe2ish',
    password: '2061726a14e08075c9059dc387696a4b8583072d7b7132e8f344f0588b6c100f',
    port: 5432,
})

/* GET users listing. */
router.post('/', function(req, res, next) {
    
    const { firstname, lastname, storenum } = req.body;
    console.log(req.body.firstname);
  
    pool.query('SELECT * FROM sick_time WHERE firstname = $1 AND lastname = $2 AND storenum = $3', 
		  [firstname, lastname, storenum], (error, results) => {
		  if (error) {
              throw error;
              console.log(error);
		  }
		  res.status(200).json(results.rows)
		  })
    });

module.exports = router;
