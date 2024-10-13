import mongoose from mongoose

const patientSchema = new mongoose.Schema({

   name:{
    type:String,
    required: true
   },
   diagonsedWidth:{
    type: String,
    required: true
   },

   address:{
    type: String,
    required: true 
   },

},{timestamps : true})


export const Patient  = mongoose.model("Patient", patientSchema)