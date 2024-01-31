import { Schema, model } from 'mongoose';

const MentorSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    expertise: String
});

const Mentor = model('Mentor', MentorSchema);

export default Mentor;