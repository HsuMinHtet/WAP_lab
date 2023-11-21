let students = [
    {
        "studentId": "610001",
        "firstname": "John",
        "lastname": "Smith",
        "courses": [
            {
                "courseId": "CS303",
                "coursename": "Web Application Programming in JavaScript",
                "semester": "2021-Spring",
                "grade": 99
            },
            {
                "courseId": "CS445",
                "coursename": "Modern Asynchronous Programming",
                "semester": "2021-Spring",
                "grade": 95
            }
        ]
    },
    {
        "studentId": "610002",
        "firstname": "Edward",
        "lastname": "Jack",
        "courses": [
            {
                "courseId": "CS472",
                "coursename": "Web Application Programming",
                "semester": "2021-Spring",
                "grade": 82
            },
            {
                "courseId": "CS544",
                "coursename": "Web Application Architecture",
                "semester": "2021-Spring",
                "grade": 88
            }
        ]
    }
]

module.exports= class Student{
    constructor(studentId,firstname,lastname,courses=[]){
        this.studentId=studentId;
        this.firstname=firstname;
        this.lastname=lastname;
        this.courses= courses;
    }

    static addCourseByID(id,course){
        const result= students.find(s=>s.studentId==id);
        if(result){
            let courseIndex=result.courses.findIndex(c=>c.courseId.includes(course.courseId));
            if(courseIndex>-1){
                result.courses[courseIndex]=course;
            }else{
                result.courses.push(course);
            }
        }else{
           // throw new Error(`error: Student doesn’t exist with ID: , ${id}`);
            console.log('Not found student ID');
        }
       return result;
    }

    static avgGradeByStudentIdBySemester(id,semester){

        const avg= students.find(s=>s.studentId==id)
        .courses.filter(c=> c.semester.includes(semester))
        .reduce((accum,elem,index,arr)=> accum+elem.grade/arr.length,0);
        console.log(avg);
    }

}