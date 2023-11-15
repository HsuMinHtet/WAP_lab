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
message is not in global because it is inside the wrapper function
this keyword is global object
message should be global object property to solve the problem
*/