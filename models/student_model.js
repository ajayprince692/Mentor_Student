import { Schema, model } from 'mongoose';

const StudentSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    mentor: {
        type: Schema.Types.ObjectId,
        ref: 'Mentor'
    }
});

const Student = model('Student', StudentSchema);

export default Student;