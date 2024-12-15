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

app.get('/nbooking',async (request,response) => {

    try{
    const bookings = await Booking.find({});
    return response.status(200).json(bookings);
    
    }catch(error){
    
    
    console.log(error.message);
    response.status(500).send({ message: error.message});
    
    
    }
    
    
    });

    app.get('/nbooking/:id',async (request,response) => {

        try{
    
        const {id} = request.params;
        const booking = await Booking.findById(id);
        return response.status(200).json(booking);
            
        }catch(error){
            
            
        console.log(error.message);
        response.status(500).send({ message: error.message});
            
            
        }
            
            
        });

app.get('/nbooking/:cusId',async (request,response) => {

    try{

    const {cusId} = request.params;
    const booking = await Booking.findOne({cusId});
    return response.status(200).json(booking);
        
    }catch(error){
        
        
    console.log(error.message);
    response.status(500).send({ message: error.message});
        
        
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



