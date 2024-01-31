import { find, create } from '../models/mentor.model';
import { find as _find, create as _create, findByIdAndUpdate, findById } from '../models/student.model';

export async function getAllMentors() {
    return await find();
}

export async function getAllStudents() {
    return await _find().populate('mentor');
}

export async function createMentor(mentor) {
    return await create(mentor);
}

export async function createStudent(student) {
    return await _create(student);
}

export async function assignMentor(studentId, mentorId) {
    return await findByIdAndUpdate(
        studentId,
        { mentor: mentorId },
        { new: true }
    );
}

export async function getMentorStudents(mentorId) {
    return await _find({ mentor: mentorId });
}

export async function getStudentMentor(studentId) {
    return await findById(studentId).populate('mentor');
}