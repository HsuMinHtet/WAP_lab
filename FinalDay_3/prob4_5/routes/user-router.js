//1.third-party module
const express= require('express');
const router = express.Router();
const path= require('path');

router.get('/user',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','user.html'));
});

router.post('/show',(req,res)=>{
    res.send(`${req.body.name}`);
});

module.exports=router;