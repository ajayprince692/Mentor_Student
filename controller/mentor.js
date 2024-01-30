import Mentor from '../models/mentor.js';

export const createMentor = async (req, res) => {
    try {
        const mentor = new Mentor(req.body);
        console.log(mentor);

        res.status(200).json({ message: "Mentor created successfully", mentor: mentor });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};