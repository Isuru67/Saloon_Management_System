import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({

cusId : {

   type : String,
   required : true,


},

serviceId: {


},










});


export const Booking = mongoose.model('booking', bookingSchema);