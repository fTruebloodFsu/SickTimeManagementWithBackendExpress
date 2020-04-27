//import { Pool } from 'pg';
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

router.post('/', function(req, res, next) {
    
    const { firstname, lastname, storenum, date, shift, hour } = req.body;
    console.log(req.body.firstname)

    pool.query('INSERT INTO sick_time(firstname, lastname, storenum, requestdate, shift, hoursrequested) VALUES($1, $2, $3, $4, $5, $6)', 
                [firstname, lastname, storenum, date, shift, hour], 
                (error,result) => {
                    if (error) {
                        throw error
                    }
                    res.status(201).send(`User added with name: ${result.FirstName} ${result.LastName}`)
                })
    });

module.exports = router;
