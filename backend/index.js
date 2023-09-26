import express from "express";
import { PORT,mongoDBURL } from './config.js';
import mongoose from "mongoose";
import cors from "cors"
 
import booksRoute from "./routes/booksRoute.js"

const app = express();
// Middleware for parsing request body
app.use(express.json())


// Middleware for handling CORS Policy
// Option 1: Allow all origin with default of cors
app.use(cors())
// Option 2: Allow Custom Origins
// app.use(
//     cors({
//         origin: "http://localhost:3000",
//         methods: ['GET','POST','DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// )


app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('Welcome to Book Store')
});


app.use('/books',booksRoute)



// mongodb
mongoose.connect(mongoDBURL)
        .then(()=>{
            console.log('App connected to database')
            app.listen(PORT, ()=>{
                console.log(`App is listening to port: ${PORT}`)
            });
        }).catch((error)=>{
            console.log(error)
        })