//1.third-party module
const express = require('express');
const path= require('path');

//2.instantiations
const app = express();

//3.set configurations
//app.disable('case sensitive routing');
app.set('port', process.env.PORT || 3000);
console.log(app.get('port'));
//console.log(process.env.NODE_ENV);

//4. middlewares
app.use('/users', (req, res, next) => {
    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/product" method="post">
        <p>Name: <input name="title"></p>
        <p>Password:  <input type="password"name="password"> </p>
        <button>Add</button>
    </form>
</body>
</html>`;
    console.log("I m in Users");
    res.send(html);
});

app.use('/product', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.use((req, res) => {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body>
        <form action="/users" method="post">
            <h2> Click to check your Product!! </h2>
            <button>Check</button>
        </form>
    </body>
    </htm>
    `;
    console.log('I am in Init page');
    res.send(html);
});


//7.Bootup
app.listen(3000, () => console.log('listening on 3000'));
