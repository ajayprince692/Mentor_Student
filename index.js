import express, { json } from 'express';
import  mongoose  from 'mongoose';
import Spear from './routes/home.js';

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://ajayprince1342:admin123@cluster0.utbb5ka.mongodb.net/');
const db = mongoose.connection;
const app = express();


app.use(json());


app.use('/', Spear);

const PORT = process.env.PORT || 7999;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});