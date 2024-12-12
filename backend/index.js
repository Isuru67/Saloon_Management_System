import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Booking } from "./models/bookingModel.js";






const app = express();

app.use(express.json());




app.post('/nbooking', async (request , response) => {


const bookingDetails = new Booking(request.body);

try{
await bookingDetails.save();
response.status(201).send(bookingDetails);

}
catch (error){

    console.error("Error placing order:", error);
    response.status(500).json({ message: "Failed to place Booking." });



}





});



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



