const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    console.log(req.body);
    res.json({
        message : 'requet GET reçu',
    });
});

router.post('/',(req, res, next)=>{
    console.log(req.body);
    res.json({
        message : 'requet POST reçu',
    });
});

module.exports = router