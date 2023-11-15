global.message = 'Hello World'; // for NodeJs
//var message = 'Hello World';    // for Browser
function logMessage() {
    console.log(this.message);
}
logMessage();


/* 
Output
---------
Hellow World (At Browser )
Window has message and logMessage() funcion

underfined (At NodeJs)
Node has no Window but it has global object
logMessage() funcion is in the global,
message should be global object property to solve the problem
*/