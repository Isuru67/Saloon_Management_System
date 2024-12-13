import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({

cusId : {

   type : String,
   required : true,

},

serviceId: {
   type : String,
   required : true,

},
serviceName: {
   type : String,
   required : true,

},
staffName:{
   type : String,
   required : true,

},
appointmentDate:{
   type : Date,
   required : true,

},
appointmentNumber:{
   type : Number,
   required : true,

},


}, {


   timestamps: true

});


export const Booking = mongoose.model('booking', bookingSchema);