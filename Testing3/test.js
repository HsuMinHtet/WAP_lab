let group3 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student
            );
        }.bind(this));
    }
};
group3.showList();
console.log("*************************");


let test = {
    title: "WAP",
    students: ["Johnmm", "Peteee", "Aliceeee"],
    showStudents: function(){
        const self = this;
        const print = function(stu) {
            console.log(`${self.title},${stu}`);
        }
        //print.apply(this,[this.students]);
        print(this.students);
    }
};
//test.showStudents();

/* Solution :3 (Call) */
console.log("Solution :3 (call)");
let group2 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        const print = function(student){
            console.log(this.title + ": " + student);
        }
        this.students.forEach((student) => {
           print.call(this,student);
        });

    }
};
group2.showList();
console.log("*************************");