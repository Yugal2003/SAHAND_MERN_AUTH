import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'
import userRoute from './routes/userRoute.js'

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO)
.then(() => console.log(`MongoDB Connect !!!`))
.catch(() => console.log(`Error While Connect MongoDB !!!`))

const port = process.env.port || 8954;
app.use("/api/user",userRoute);

app.listen(port, () => {
    console.log(`Server Run On Port : ${port}`);  
});