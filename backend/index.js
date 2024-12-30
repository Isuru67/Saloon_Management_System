import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import bookingRoutes from "./routes/bookingRoutes.js";



const app = express();

app.use(express.json());

app.use('/nbooking' , bookingRoutes);


mongoose
.connect(mongoDBURL)
.then(() => {

console.log('app connected to databse');

app.listen(PORT, ()=> {
    console.log(`App is lisitening to port: ${PORT}`);
 
 });

})
.catch(() =>{

console.log('error in connecting database');


});



