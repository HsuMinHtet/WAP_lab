//1.third-party module
const express= require('express');
const productRouter= require('./routes/product-router');
const userRouter= require('./routes/user-router');
const path= require('path');

//2.instantiations
const app =express();

//4.middleware
//http://localhost:3030/abc(public/resources) + /css/main.css
app.use('/abc',express.static(path.join(__dirname,'public','resources')));

app.use(express.urlencoded());
app.use(userRouter);
app.use(productRouter);

app.use('/math',(req,res,next)=>{
    throw new Error('Error');
});

//404
app.use((req,res)=>{
    res.status(400).send('404 Page Not Found!!'); 
});

 //500
app.use((err,req,res,next)=>{
    res.status(500).send('Internal Server Error!');
});

//7.Bootup
app.listen(3000);