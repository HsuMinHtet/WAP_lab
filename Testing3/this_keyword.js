
const user={
    firstname: 'John',
    sayHi: function(){
        console.log(this);
        console.log(`${this.firstname} Say History......` );
    }
}
//user.sayHi(); // developer set the method call
//setTimeout(user.sayHi,1000); //this will global


/* Solutions */

setTimeout(()=>user.sayHi(),1000); //arrow function
setTimeout(function(){user.sayHi()},1000); // function wrap
setTimeout(user.sayHi.bind(user),1000); //Bind
setTimeout(()=>user.sayHi.call(user),1000); //Call
setTimeout(()=>user.sayHi.apply(user),1000); //Apply 

