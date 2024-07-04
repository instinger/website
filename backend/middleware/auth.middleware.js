import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";



const verifyJWT = asyncHandler(async(req,res,next)=>{

    // console.log(req.cookies,"===cookies===");
    // console.log("Authorization header:", req.header("Authorization"));

    try {
        
        let token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","");
        if (typeof token === 'object' && token.accessToken) {
            token = token.accessToken;
        }
        
    // console.log("Extracted token:", token);
    // console.log("Token type:", typeof token);


        if(!token)
        return res.status(401).json(new ApiError(401,null,"Unauthorized request"));

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodedToken?._id).select("-password");

        if(!user)
            return res.status(401).json(new ApiError(401,null,"Invalid access token"));

        req.user = user;

        next();

    } catch (error) {
        console.log(error,"===error===");
        return res.status(500).json(new ApiError(500,null,error.message));
    }

    
})


export {verifyJWT};