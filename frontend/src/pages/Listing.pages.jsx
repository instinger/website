import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper,SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import { useParams } from "react-router-dom";
import { FaShare } from "react-icons/fa";

const Listing = () => {


    SwiperCore.use([Navigation]);


    const [listing,setListing] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [copied,setCopied] = useState(false);


    const {currentUser} = useSelector((state)=>state.user);

    const params = useParams();

    useEffect(()=>{
        const fetchListing = async()=>{
            try {
                setLoading(true);
                const res = await fetch(`/api/listing/get/${params.listingId}`);
                const data = await res.json();

                if(data.success === false){
                    setError(true);
                    setLoading(false);
                    return;
                }   

                const formattedDate = new Date(data.data.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });

                data.data.date = formattedDate;

                setListing(data.data);
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }

        fetchListing();
    },[params.listingId])


    return(
        <main>
            {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
            {error && <p className="text-center my-7 text-2xl">Oops!! something went wrong.</p>}
            {listing && !loading && !error && (
                <div>
                    <div 
                    className="h-[300px] sm:h-[550px] sm:m-10 sm:rounded-xl" 
                    style={{
                    background: `url(${listing.imageUrl[0]}) center no-repeat`,
                    backgroundSize: "cover"
                    }}
                    >
                    </div>
                    <div className="fixed top-[15%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer">
                <FaShare
                className="text-slate-500"
                onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setCopied(true);
                    setTimeout(()=>{
                        setCopied(false);
                    
                    },2000);
                }}
                />
             </div>

             {copied && (<p className="fixed top-[20%] right-[3%] z-10 bg-slate-100 p-3 rounded-lg">Link copied</p>)}

             <div className="flex flex-col max-w-4xl p-3 mx-auto my-7 gap-4">
                <p className="sm:text-6xl text-2xl font-semibold text-center text-slate-700">
                    {listing.name}
                </p>
                <p className="text-slate-700 text-center m-10 flex flex-wrap justify-center">
                  <span className="font-semibold">Blog </span> <span className="font-bold">.</span> <span> {listing.type}</span> <span className="font-bold  mx-5">|</span>  <span className="font-semibold"> Published on</span>   <span className="mx-1">:</span>   <span>{listing.date}</span> <span className="font-bold mx-5">|</span> <span>{listing.author}</span>
                </p>
                <div className="text-slate-800 text-lg">
                {listing.description.split('\n').map((paragraph, index) => (
                 <p className="mt-5" key={index}>{paragraph}</p>
                ))}
                </div>
             </div>

          </div>
            )}
        </main>
    )
}

export default Listing;