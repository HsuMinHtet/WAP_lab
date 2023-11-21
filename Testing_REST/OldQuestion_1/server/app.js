const express= require('express');
const studentRouter= require('./route/student_router');
const app= express();

app.use(express.json());

app.use('/students',studentRouter);

app.listen(3000,()=>console.log('listening 3000...'));