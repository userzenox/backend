import mongoose from "mongoose"

 const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },


        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        
        password: {
            type: String,
            required: [true, "password is requirec "],
            unique: true,
            lowercase: true
        }
    }, {timestamps: true}
)

 export const User = mongoose.model("User" , userSchema)

//this input that we give "user" when stored in Database becomes plural "users"
 //  "todo"   ---> "todos"