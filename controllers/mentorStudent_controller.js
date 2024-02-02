import Mentor from '../models/mentor_model.js';
import Student from '../models/student_model.js';

let createMentor=async(req, res)=> {
    try {
        const mentor = new Mentor(req.body);
        console.log(mentor);
        await mentor.save();
        res.status(200).json({ message: "Mentor created successfully", mentor: mentor });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

 let createStudent=async(req, res)=> {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(200).json({ message: "Students created successfully", student: student });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

let assignMentor=async(req, res)=> {
    try {
        const { studentId } = req.params;
        const { mentorId } = req.body;
        const student = await findByIdAndUpdate(
            studentId,
            { mentor: mentorId },
            { new: true }
        );
        res.status(200).json({
            message: 'Assigned a student successfully',
            student
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

let getMentorStudents=async(req, res)=> {
    try {
        const { mentorId } = req.params;
        const students = await find({ mentor: mentorId });
        res.status(200).json({
            message: 'Successfully fetched students data with mentor',
            students
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

let getStudentMentor=async(req, res)=> {
    try {
        const { studentId } = req.params;
        const student = await findById(studentId).populate('mentor');
        res.status(200).json({
            message: 'Successfully fetched',
            Student: student.mentor
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

export default{
    getMentorStudents,
    getStudentMentor,
    createMentor,
    createStudent,
    assignMentor
}