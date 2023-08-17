// // In new versions of node import statement can be used



import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
// require('dotenv').config();
import { config } from 'dotenv';

const result = config();

if (!result.error) {
     Object.keys(result.parsed).forEach((key) => {
       const value = result.parsed[key];
       if (value) {
         process.env[key] = value;
       }
     });
}


const app = express();

// For handling the post requests
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))


app.use(cors());

// Every route inside the post route will start from posts
app.use('/posts', postRoutes);
app.use("/user", userRouter);

const CONNECTION_URL = process.env.DATABASE;
console.log(CONNECTION_URL);
const PORT = process.env.PORT;

// Our Server got Connected to our database

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))  // If successful then
     .catch((error) => console.log(error.message));   // If connection to the database was not successful then 

// mongoose.set('useFindAndModify', false);

mongoose.set('strictQuery', true);

//mongodb+srv://harshsadana74:Harsh@0203@cluster0.2qd81nj.mongodb.net/?retryWrites=true&w=majority