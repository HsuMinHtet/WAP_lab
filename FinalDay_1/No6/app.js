// app.js
const getName = require('./pattern1');
//pattern2 to pattern1
getName(); //[Function (anonymous)]

/* 
Output
--------
Josh Edward
(Reason)
1)export and module.export point to empty obj 
2)export.getFirstName: fn
3)re-asign to export=anonymous fn
4)re-asign to moudule.export=anonymous fn

*/