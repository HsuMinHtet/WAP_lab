const bookRouter= require('../server/routes/book-router');
const express= require('express');
const app = express();

app.use(express.json());

app.use('/book',bookRouter);

app.use((err,req,res,next)=>{
    res.status(500).send('Server Error!!!');
});

app.listen(3000,()=> console.log('Listening....3000'));

