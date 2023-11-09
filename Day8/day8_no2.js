function Student(firstname, lastname){
    this.firstName= firstname;
    this.lastName= lastname;
    this.grade=[];
}
// inputNewGrade(newGrade): push newGrade to grades
Student.prototype.inputNewGrade= function(newGrade){
    this.grade.push(newGrade);
    return this.grade;

}
// computeAverage(): return average of the grades
Student.prototype.computeAverage= function (){
    return this.grade.reduce((accu,elem,index,arr)=>accu+elem/arr.length,0);
}

let stu1 = new Student('John','Smith');
stu1.grade= stu1.inputNewGrade.bind(stu1,99)();
stu1.grade= stu1.inputNewGrade.bind(stu1,100)();
console.log(stu1.computeAverage.bind(stu1)());

let stu2 = new Student('Edward','Hopkins');
stu2.grade= stu1.inputNewGrade.bind(stu2,80)();
stu2.grade= stu1.inputNewGrade.bind(stu2,98)();
console.log(stu1.computeAverage.bind(stu2)());