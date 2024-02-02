import mongoose from 'mongoose';

const MentorSchema = new mongoose.Schema({
    name: String,
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student' 
    }]
}, { versionKey: false });

const Mentor = mongoose.model('Mentor', MentorSchema);

export default {Mentor,MentorSchema};