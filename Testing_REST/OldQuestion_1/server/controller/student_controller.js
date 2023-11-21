const Student=require('../model/student');

exports.addCourseByID= (req,res)=>{
    res.json(Student.addCourseByID(req.params.id, req.body));
}

exports.avgGradeByStudentBySemester= (req,res)=>{
    res.json(Student.avgGradeByStudentIdBySemester(req.params.id,req.query.semester));
}