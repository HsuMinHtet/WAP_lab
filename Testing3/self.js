
const user = {
    salute: "",
    greet: function () {
        this.salute = "Hello";
        console.log(this.salute); //Hello
        const setFrench = function (newSalute) { //inner function
            this.salute = newSalute;    //this is not user in here
        };
        setFrench("Bonjour");
        /* Soulutons for (call, bind and apply) */
        setFrench.call(user, 'Bonjour');
        console.log(this.salute); //Bonjour
        setFrench.apply(user, ['Bonjour']);
        console.log(this.salute); //Bonjour
        setFrench.bind(user, 'Bonjour')();
        console.log(this.salute); //Bonjour
    }
};
user.greet(); //Hello Hello ??


/* Solutions 1 : Arrow Function*/
const user1 = {
    salute: "",
    greet: function () {
        this.salute = "Hello";
        console.log(this.salute); //Hello
        const setFrench = (newSalute) => { //inner function
            this.salute = newSalute;    // arrow function has 'this' key word,so it take surrounding environment(closet method/Function or global)
        };                              //arrow function should use for function only not for method
        setFrench("Bonjour");
        console.log(this.salute); //Bonjour??
    }
};
user1.greet(); //Hello Hello ??

const user2 = {
    salute: "",
    greet: function () {
        const self = this;
        self.salute = "Hello";
        console.log(self.salute); //Hello
        const setFrench = function (newSalute) { //inner function
            self.salute = newSalute;    //this is not user in here
        };
        setFrench("Bonjour");
        console.log(self.salute); //Bonjour??
    }
};
user2.greet(); //Hello Hello ??