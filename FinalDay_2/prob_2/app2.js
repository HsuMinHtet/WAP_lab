const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    fs.createReadStream(path.join(__dirname, 'img1.jpeg')).pipe(res);
}).listen(3000);
