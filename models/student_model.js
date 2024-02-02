import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    name: String,
    mentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor' 
    }
}, { versionKey: false });

const Student = mongoose.model('Student', StudentSchema);

export default {Student,StudentSchema};