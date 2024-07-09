import React from "react";
import { Link } from "react-router-dom";

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

const ListingItem = ({listing}) => {
    return(
        <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
            <Link to={`/listing/${listing._id}`}>
                <img src={listing.imageUrl} alt="image" className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300" />

                <div className="p-3 flex flex-col gap-2 w-full">
                    <p className="text-lg text-slate-700">{formatDate(listing.date)}</p>
                    <div className="gap-1 font-bold text-gray-700 truncate w-full">
                        {listing.name}
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-5">{listing.description}</p>
                   
                </div>
            </Link>
               
        </div>
    )
};


export default ListingItem;