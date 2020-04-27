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
