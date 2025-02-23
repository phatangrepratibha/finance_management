import jwt from "jsonwebtoken";
import User from "../model/user-model.js";

export const authMiddleware=async(req,res,next)=>{
    const token=req.header("Authorization");

    if(!token)
    {
        return res.status(401).json({msg:"unauthorized http,token not provided"});
    }

    const jwtToken=token.replace("Bearer","").trim();
    console.log(jwtToken);

    try {

        const isVerfied=jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);
        console.log(isVerfied);

        const userData=await User.findOne({email:isVerfied.email}).select({
            password:0,
        });

        req.token=token;
        req.user=userData;
        req.userId=userData._id;

        next();
        
    } catch (error) {
      return res.status(401).json({msg:"unauthorized invalid token"});  
    }
};

export default authMiddleware;