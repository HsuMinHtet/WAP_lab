/* Our Group: John
Our Group: Pete
Our Group: Alice */

/* Solution :1 (Self pattern) */
console.log("Solution :1 (Self pattern)");
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        const self = this;
        self.students.forEach(function (student) {
            console.log(self.title + ": " + student
            );
        });
    }
};
group.showList();
console.log("*************************");

/* Solution :2 (Arrow Function) */
console.log("Solution :2 (Arrow Function)");
let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((student) => {
            console.log(this.title + ": " + student
            );
        });
    }
};
group1.showList();
console.log("*************************");

/* Solution :3 (Call) */
console.log("Solution :3 (call)");
let group2 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        const print = function (student) {
            console.log(this.title + ": " + student);
        }
        this.students.forEach((student) => {
            print.call(this, student);
        });
    }
};
group2.showList();
console.log("*************************");

/* Solution :4 (Apply) */
console.log("Solution :4 (Apply)");
let group3 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((student) => {
            return function (student) {
                console.log(this.title + ": " + student);
            }
                .apply(this, [student]);
        });
    }
};
group3.showList(group3);
console.log("*************************");


/* Solution :5 (Bind) */
console.log("Solution :5 (Bind)");
let group4 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student
            );
        }.bind(this));
    }
};
group4.showList(group4);
console.log("*************************")