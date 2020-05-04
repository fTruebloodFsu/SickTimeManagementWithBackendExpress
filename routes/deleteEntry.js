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

/* DELETE user by id. */
router.post('/', function(req, res, next) {
    
    const { entryId } = req.body;
    console.log(req.body.entryId);
  
    pool.query('DELETE FROM sick_time WHERE id = $1', 
		  [entryId], (error, results) => {
		  if (error) {
              throw error;
              console.log(error);
		  }
		  res.status(200).json(results)
		  })
    });


module.exports = router;