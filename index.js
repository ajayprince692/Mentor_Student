import express from 'express';
import mongoose from 'mongoose';
import * as HomeController from './controllers/home';
import * as MentorController from './controllers/mentor';
import * as StudentController from './controllers/student';

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://ajayprince1342:admin123@cluster0.utbb5ka.mongodb.net/')
let database = mongoose.connection;

// Routes
app.get('/', HomeController.getHomePage);
app.post('/schedule/mentors', MentorController.createMentor);
app.post('/schedule/students', StudentController.createStudent);

const PORT = 7999;
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});




