const index = require('express').Router();
//const saves = require('./saving')
//const load  = require('./loading');
//const reset = require('./reset');
//const score = require('./Scoring');

//index.use('/api',saves);
//index.use('/api',load);
//index.use('/api',reset);
//index.use('/api',score);

index.get('/',(req, res)=>
{
res.sendFile("index.html");
});

module.exports = index;