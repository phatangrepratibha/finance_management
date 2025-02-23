import mongoose from "mongoose"
import jwt from "jsonwebtoken"


const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },

    password:{
        type:String,
        required:true,
    },

    isAdmin:{
        type:Boolean,
        defalt:false,
    },
})


UserSchema.methods.generateToken=async function(){

    try {
        return jwt.sign(
            {
                userId:this._id.toString(),
                email:this.email,
                isAdmin:this.isAdmin,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:"30d",
            }
        );
        
    } catch (error) {
         console.log("Token error",error)
    }
}


const User=mongoose.model("user",UserSchema)

export default User;