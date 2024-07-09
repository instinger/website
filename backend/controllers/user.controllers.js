import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {User} from "../models/user.models.js";
import { Listing } from "../models/listing.model.js";



const generateAccessToken = async(userId) => {

    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();

        await user.save({validateBeforeSave: false});
        return {accessToken};

    } catch (error) {
        return res.status(500).json(new ApiError(500,null,"something went wrong while generating access token"));
    }
}

const register = asyncHandler(async(req,res)=>{

    console.log("reached");
    const {username,email,password} = req.body;

    if([username,email,password].some((field)=>field?.trim()===""))
       return res.status(401).json(new ApiError(401,"username, email and password are required"));

    const existedUser = await User.findOne({
        $or: [{username},{email}]
    });

    if(existedUser)
       return res.status(401).json(new ApiError(401,null,"user already exists"));

    const user = await User.create({
        username:username.toLowerCase(),
        email,
        password,
    })

    const createdUser = await User.findById(user._id).select("-password");

    if(!createdUser)
        return res.status(500).json(
    new ApiError(500,null,"something went wrong while creating user"))
    ;

    return res.status(200).json(
        new ApiResponse(200,createdUser,"user registered successfully")
    )


});

const login = asyncHandler(async(req,res)=>{

    const {email,password} = req.body;

    if(!email || !password)
       return res.status(401).json(new ApiError(401,null,"email and password are required"));

    const user = await User.findOne({email});

    if(!user)
       return res.status(401).json(new ApiError(401,null,"user does not exists"));

    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
        return res.status(401).json(new ApiError(401,null,"invalid login credentials"))
    }

    let accessToken = await generateAccessToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password");

    const options = {
        httpOnly: true,
        secure:true
    }
    if (typeof accessToken === 'object' && accessToken.accessToken) {
        accessToken = accessToken.accessToken;
    }

    return res.status(200).cookie("accessToken",accessToken,options).json(
        new ApiResponse(200,loggedInUser,
    "user logged in successfully")
    )

});

const updateUser = asyncHandler(async(req,res)=>{
    

    if(req.user._id.toString() !== req.params.id.toString())
        return res.status(403).json(new ApiError(403,null,"you are not authorized to update this user"));

    try {
      
        const user = await User.findByIdAndUpdate(req.params.id,{
            $set:{
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
            }
        },{new:true});

        if(!user){
            return res.status(500).json(
                new ApiError(500,null,"something went wrong while updating user")
            )
        }

        const updatedUser = await User.findById(user._id).select("-password");

        res.status(200).json(
            new ApiResponse(200,updatedUser,"user updated successfully"));

    } catch (error) {
        return res.status(500).json(
            new ApiError(500,null,"something went wrong while updating user")
        )
    }

})

const deleteUser = asyncHandler(async(req,res)=>{

    if(req.user._id.toString() !== req.params.id.toString())
        return res.status(403).json(
        new ApiError(403,null,"you are not authorized to delete this user")
    );

    try {

        const user = await User.findByIdAndDelete(req.params.id);

        if(!user)
            return res.status(500).json(
        new ApiError(500,null,"something went wrong while deleting user")
        );

        return res.clearCookie("accessToken").status(200).json(
            new ApiResponse(200,null,"user deleted successfully")
        );

        
    } catch (error) {
        console.log(error,"===error===");
        return res.status(500).json(new ApiError(500,null,"something went wrong while deleting user"));
    }

})


const signOut = asyncHandler(async(req,res)=> {

    if(req.user){
        await User.findByIdAndUpdate(req.user._id, {
          $unset: {
            accessToken: 1,
          }
        }, { new: true });
    }
    

    const options = {
        httpOnly:true,
        secure:true,
        sameSite: 'strict', 
        expires: new Date(0)
    }


    return res.status(200).clearCookie("accessToken",options).json(
        new ApiResponse(200,{},"user logged out successfully")
    );

})


const refreshToken = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) {
     return res.status(401).json(new ApiError(401, null, "User not found"));
    }
  
    const accessToken = user.generateAccessToken();
  
    await User.findByIdAndUpdate(user._id, {
      $set: { accessToken }
    });
  
    const options = {
      httpOnly: true,
      secure: true
    };
  
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .json(new ApiResponse(200, { accessToken }, "Access token refreshed"));
  });



const getUserListings = asyncHandler(async(req,res)=>{


    if(req.user._id !== req.params.id){
        try {
            const listing = await Listing.find({userRef:req.params.id});
            return res.status(200).json(
                new ApiResponse(200,listing,"listings retrieved successfully")
            )
        } catch (error) {
            return res.status(500).json(
                new ApiError(500,null,error.message)
            )
        }
    }else{
        return res.status(403).json(
            new ApiError(403,null,"you are not authorized to view this user's listings")
        )
    }


})




const getUser = asyncHandler(async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);

        if(!user)
            return res.status(401).json(new ApiError(401,null,"user not found"));   

        const updatedUser = await User.findById(user._id).select("-password");

        return res.status(200).json(
            new ApiResponse(200,updatedUser,"user found successfully")
        )
    } catch (error) {
        return res.status(500).json(
            new ApiError(500,null,error.message)
        )
    }
})





export {generateAccessToken,register,login,updateUser,deleteUser,signOut,getUserListings,getUser,refreshToken};
