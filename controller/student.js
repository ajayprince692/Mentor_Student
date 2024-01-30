import Student from '../models/student.js';

export const createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        res.status(200).json({ message: "Students created successfully", student: student });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};