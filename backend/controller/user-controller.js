import User from "../model/user-model.js";
import bcrypt from "bcrypt"

export const home=async(req,res)=>{
    res.send("controller home")
}


export const register=async(req,res)=>{
    try {
    const data=req.body;
   const{username,email,password}=req.body

   const userExist =await User.findOne({email:email})
    if(userExist){
        return res.status(400).json({message:"email already exist!!!"})
    }


     const saltRounds=10;
     const hash=await bcrypt.hash(password,saltRounds);

    const userCreated=await User.create({username,email,password:hash})
    return res.status(200).json({message:"user Registered successfully",token:await userCreated.generateToken(),
        userId:userCreated._id.toString(), });


    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server error"})
    }
}



export const login=async(req,res)=>{
    try {
        const{email,password}=req.body
        const userExist=await User.findOne({email});

        if(!userExist)
        {
            return res.status(400).json({message:"Invalid Credentials"})
        }

        const user = await bcrypt.compare(password, userExist.password);


        if(user)
        {
            return res.status(200).json({message:"user Login successfully",token:await userExist.generateToken(),
                userId:userExist._id.toString(),});
        }
        else
        {
            res.status(401).json({message:"Invalid  Email and Password"})
        }
        
    } catch (error) {
        res.status(500).json({message:"Internal Server error"})
        console.log(error)
    }
}

export const user=async(req,res)=>{
    try {
        const userData=req.user;
        console.log(userData);
        return res.status(200).json({userData})
        
    } catch (error) {
        next(error)
    }
}



export default {home,register,login,user};