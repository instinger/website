import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({

    name: {
        type:String,
        required:true,
    },

    description: {
        type:String,
        required:true,
    },

    author:{
        type:String,
        required:true,
    },

    type:{
        type:String,
        required:true,
    },

    date: {
        type:Date,
        required:true,
    },
    imageUrl : {
        type:Array,
        required:true,
    }, 
    userRef : {
        type: String,
        required: true,
    }

},{timestamps:true});


export const Listing = mongoose.model("Listing",listingSchema);