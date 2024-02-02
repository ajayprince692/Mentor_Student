
import express from 'express';
import UserController  from '../controllers/mentorStudent_controller.js';

const router = express.Router();

router.post('/sm/mentors', UserController.createMentor);
router.post('/sm/students', UserController.createStudent);
router.put('/sm/assign/:studentId',UserController.assignMentor);
router.get('/sm/:mentorId',UserController.getMentorStudents);
router.get('/sm/:studentId',UserController.getStudentMentor);




export default router;
  
