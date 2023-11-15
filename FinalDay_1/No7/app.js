
// app.js
const { getFullname } = require('./pattern1'); //destructing object
//patter2 to pattern1
getFullname();

//const name = require('./pattern1');
//name.getFirstname();
//name.getFullname();

/* 
Output
--------
Josh Edward
(Reason)
1)export and module.export point to empty obj 
2)export.getFirstName: fn
3)re-asign to export=anonymous fn
4)moudule.export.getFullName: fn
*/