import mongoose from "mongoose"
import { Product } from "./product.models"

//mini models
const orderItemSchems = new mongoose.schema = new mongoose.Schema({

     productId: {
        type: mongoose.SchemaType.Types.ObjectId,
        ref: "Product"
     },
    quantity: { 
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({

   orderPrice: {
    type: Number,
    required: true
   } ,

   customer:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
   },

   orderItems:{
    type:[orderItemSchems]
   },

   address:{
       type: String,
       required: true
   },

   status: {
    type: String,
    enum: ["PENDING" , "CANCELLED", "DELIVERED"],
    default: "PENDING"
   }


}, {timestamps: true} )




export const Order = mongoose.model("Order", orderSchema)