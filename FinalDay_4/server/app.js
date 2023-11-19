const express= require('express');
const bookRouter= require('./route/book_router');

const app=express();

app.use(express.json());

app.use('/books',bookRouter);

app.use((err,req,res,next)=>{
    res.status(500).send(`Server Error ${err.message}`);
});

app.listen(3000,()=>console.log('Listening....'));