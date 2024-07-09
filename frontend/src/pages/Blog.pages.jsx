import React, { useEffect, useState } from "react";
import ListingItem from "../components/ListingItem.components";
import { useParams } from "react-router-dom";
import { button } from "@material-tailwind/react";


const Blog = () => {

    const [loading,setLoading] = useState(false);
    const [listings,setListings] = useState([]);
    const [showMore,setShowMore] = useState(false);


    useEffect(()=>{
        const fetchAllListings = async()=>{
            setLoading(true);
            try {
                const response = await fetch("/api/listing/get");
                const data = await response.json();
                if(data.success===false){
                    console.log(data.message);
                    return;
                }
                setListings(data.data);
                setLoading(false);
                setShowMore(data.data.length>8)
            } catch (error) {
                console.log(error.message)
                setLoading(true);
            }
        }

        fetchAllListings();
    },[])


    const showMoreClick = async() => {
        const startIndex = listings.length;
            const res = await fetch(`/api/listing/get?startIndex=${startIndex}`);
            const data = await res.json();

            if(data.data.length<9){
                setShowMore(false);
            }

            const newListings = data.data.filter(newListing => 
                !listings.some(existingListing => existingListing._id === newListing._id)
              );

             setListings(prevListings => [...prevListings, ...newListings]);

    }

    return(
        <main className="flex flex-col">
            <h1 className="text-3xl font-semibold border-b p-3 mt-10 text-center">The <span className="text-slate-500 font-bold">Ins</span><span className="text-slate-700 font-bold">tinger </span>Blog</h1>
            <div className="p-7 flex flex-wrap justify-center gap-4">


                {!loading && loading.length === 0 && (
                    <p className="text-xl text-slate-700">No listing found!</p>
                )}

                {loading && (
                    <p className="text-xl text-slate-700 text-center w-full">Loading...</p>
                )}

                {!loading &&
                 listings && 
                 listings.map((listing)=><ListingItem key={listing._id} listing={listing}/>)
                }

                {
                    showMore && (
                        <button className="text-green-700 hover:text-green-600 p-7 text-center w-full" onClick={showMoreClick}>
                            ShowMore...
                        </button>
                    )

                }

            </div>
        </main>
    )
}

export default Blog;