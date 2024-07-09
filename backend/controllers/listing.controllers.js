import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Listing } from "../models/listing.model.js";


const createListing = asyncHandler(async(req,res)=> {

    try {
        const listing = await Listing.create(req.body);
        console.log(listing);
        return res.status(201).json(
            new ApiResponse(201,listing,"listing created successfully")
        )
    } catch (error) {
        return res.status(500).json(new ApiError(500,null,"something went wrong while creating listing"));
    }

})

const deleteListing = asyncHandler(async(req,res)=> {

    try {

        const listing = await Listing.findByIdAndDelete(req.params.id);

        if(!listing)
            return res.status(500).json(new ApiError(500,null,"listing cannot be deleted"));

        if(req.user.id !== listing.userRef)
            return res.status(401).json(new ApiError(401,null,"you are not authorized to delete this listing"));

        return res.status(200).json(
            new ApiResponse(200,{},"listing deleted successfully")
        )
        
    } catch (error) {
        return res.status(500).json(new ApiError(500,null,"something went wrong while deleting listing")); 
    }

})


const updateListing = asyncHandler(async(req,res)=>{

    const {name,description,author,type,date,imageUrl,userRef} = req.body;

    try {
        
        const listing = await Listing.findByIdAndUpdate(req.params.id,
            {
                name,
                description,
                author,
                type,
                date,
                imageUrl,
                userRef
            },
        )
        console.log(req.user._id,"req.body")
        console.log(listing.userRef,"userRef")

        if(!listing)
            return res.ststus(500).json(new ApiError(500,null,"listing cannot be updated"));

        if(req.user._id.toString() !== listing.userRef)
            return res.status(401).json(new ApiError(401,null,"you are not authorized to update this listing")); 

        return res.status(200).json(
            new ApiResponse(200,listing,"listing updated successfully")
        )

    } catch (error) {
        return res.status(500).json(new ApiError(500,null,error.message));
    }

})


const getListing = asyncHandler(async(req,res)=>{
    try {
        const listing = await Listing.findById(req.params.id);
        if(!listing)
            return res.status(401).json(
        new ApiResponse(401,null,"listing not found")
        );

        return res.status(200).json(
            new ApiResponse(200,listing,"listing found successfully")
        )
    } catch (error) {
        return res.status(500).json(
            new ApiResponse(500,null,error.message)
        )
    }
})

const getSingleListing = asyncHandler(async (req, res) => {
    try {
      const listing = await Listing.findById(req.params.id);
      if (!listing) {
        return res.status(404).json(
          new ApiError(404, null, "Listing not found")
        );
      }
      return res.status(200).json(
        new ApiResponse(200, listing, "Listing retrieved successfully")
      );
    } catch (error) {
      return res.status(500).json(
        new ApiError(500, null, error.message)
      );
    }
  });


const showListing = asyncHandler(async(req,res)=>{

    try {
        const {startIndex=0,limit=9} = req.query;
    
        const listings = await Listing.find().sort({date:1}).skip(parseInt(startIndex)).limit(parseInt(limit));
    
        if(!listings)
            return res.status(401).json(
                new ApiResponse(401,null,"listings not found")
            );
        
        return res.status(200).json(
            new ApiResponse(200,listings,"listings found successfully")
        )
    } catch (error) {
        return res.status(500).json(
            new ApiResponse(500,null,error.message))
    }

})




export {createListing,deleteListing,updateListing,getListing,showListing,getSingleListing};
