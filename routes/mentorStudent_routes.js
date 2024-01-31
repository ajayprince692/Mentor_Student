import { Router } from 'express';
const router = Router();
import { getAllMentors, getAllStudents, createMentor } from '../controllers/mentor-student.controller';
import { createStudent } from '../controllers/mentorStudent_controller';

router.get('/mentors', async (req, res) => {
    try {
        const mentors = await getAllMentors();
        res.status(200).json({ message: 'Successfully fetched mentors data', mentors });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/students', async (req, res) => {
    try {
        const students = await getAllStudents();
        res.status(200).json({ message: 'Successfully fetched students data', students });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

router.post('/mentors', async (req, res) => {
    try {
        const mentor = await createMentor(req.body);
        res.status(200).json({ message: 'Mentor created successfully', mentor });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

router.post('/students', async (req, res) =>{
    try{
        let student = await createStudent(req.body);
        res.status(200).json({
            message:"created successfully",student
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            alert:"failed to create"
        })
    }
});
  
export default router;