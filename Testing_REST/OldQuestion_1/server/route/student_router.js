const studentController=require('../controller/student_controller');
const express= require('express');
const router = express.Router();

router.post('/:id/courses',studentController.addCourseByID);
router.get('/:id/getAverage',studentController.avgGradeByStudentBySemester);

module.exports=router;
