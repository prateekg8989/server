const express = require('express');
    const router  = express.Router();
const db = require('./db');
const utils = require('./utils');

router.get('/',(request,response) => {
        response.send("aur hsfkjsafb");
    
});

router.get('/emp',(request,response) => {
    const connection = db.connect();
    const stmt = `select * from departments `;
    connection.query(stmt,(error,data) => {
        connection.end();
        // console.log('hello employee');
        
        response.send(utils.createResponse(error,data));
        // response.send('hello');
    });
});
module.exports = router;