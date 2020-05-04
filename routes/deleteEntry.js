var Pool = require('pg').Pool
var express = require('express');
var router = express.Router();


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
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
