//1.third-party module
const express=require('express');
const path = require('path');
const router = express.Router();

router.get('/product',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','add-product.html'));
});

router.post('/save',(req,res)=>{
    res.send(`${req.body.title},${req.body.price}`)
});

module.exports= router;