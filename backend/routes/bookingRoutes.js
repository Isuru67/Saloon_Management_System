import express from 'express';
import {Booking} from '../models/bookingModel.js';





const router = express.Router();






router.post('/', async (request , response) => {


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

router.get('/',async (request,response) => {

    try{
    const bookings = await Booking.find({});
    return response.status(200).json(bookings);
    
    }catch(error){
    
    
    console.log(error.message);
    response.status(500).send({ message: error.message});
    
    
    }
    
    
    });

router.get('/:id',async (request,response) => {

        try{
    
        const {id} = request.params;
        const booking = await Booking.findById(id);
        return response.status(200).json(booking);
            
        }catch(error){
            
            
        console.log(error.message);
        response.status(500).send({ message: error.message});
            
            
        }
            
            
        });

router.get('/:cusId',async (request,response) => {

    try{

    const {cusId} = request.params;
    const booking = await Booking.findOne({cusId});
    return response.status(200).json(booking);
        
    }catch(error){
        
        
    console.log(error.message);
    response.status(500).send({ message: error.message});
        
        
    }
        
        
    });

router.put('/:id', async (request , response) =>{

try {

const {id} = request.params;
const result = await Booking.findByIdAndUpdate(id, request.body);

if(!result){
    return response.status(404).json({ message: 'Booking not found'});

}

return response.status(200).send({message : 'Booking Updated Successfully'});
    
} catch (error) {
    
 console.log(error.message);
 response.status(500).send({ message: error.message});

}


});

router.delete('/:id' , async (request,response) =>{

try {
    
 const {id} = request.params;
 const result = await Booking.findByIdAndDelete(id);

 if(!result){

    console.log(error.message);
    response.status(500).send({message: 'Error in Deleting Book'});


 }
 return response.status(200).send({message: 'Booking deleted successfully'});

} catch (error) {
   
    console.log(error.message);
    response.status(500).send({mesage : error.message});

}






});



export default router;