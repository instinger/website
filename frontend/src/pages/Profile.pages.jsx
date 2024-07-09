
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserFailure, deleteUserStart, deleteUserSuccess, 
         signOutUserFailure, signOutUserStart, signOutUserSuccess, 
         updateUserFailure, updateUserStart, updateUserSuccess } 
from "../redux/user/userSlice";
import { Link } from "react-router-dom";




const refreshToken = async () => {
    try {
      const res = await fetch("/api/user/refresh-token", { method: "POST" });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("accessToken", data.accessToken);
      } else {
        handleSignOut();
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      handleSignOut();
    }
  };

export const checkTokenExpiration = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
      const currentTime = Date.now();
  
      if (currentTime >= expirationTime) {
        refreshToken();
      } else {
        // Set a timeout to refresh the token just before it expires
        const timeUntilExpiration = expirationTime - currentTime;
        setTimeout(refreshToken, timeUntilExpiration - 60000); // Refresh 1 minute before expiration
      }
    }
  };



const Profile = () => {

    const {currentUser,loading,error} = useSelector((state) => state.user);

    console.log(loading,"===loading===");

    const [file,setFile] = useState(null);
    const [fileChange,setFileChange] = useState(0);
    const [formData,setFormData] = useState({});
    const [updateSuccess,setUpdateSuccess] = useState(false);
    const [showImageListingError,setShowImageListingError] = useState(false);
    const [userListings,setUserListings] = useState([]);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]:e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        // console.log("Current user ID:", currentUser._id);

        try {

            dispatch(updateUserStart());
            const res = await fetch(`/api/user/update/${currentUser.data._id}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formData)
            })

            const data = await res.json();

            if(data.success === false){
                dispatch(updateUserFailure(data.errors));
                return;
            }

            dispatch(updateUserSuccess(data));
            setUpdateSuccess(true);
            setFormData(data);
            
        } catch (error) {
            dispatch(updateUserFailure(error.errors));
        }
    }

    const handleDeleteUser = async() => {

        try {

            dispatch(deleteUserStart());

            const res = await fetch(`/api/user/delete/${currentUser.data._id}`,
                {
                    method:"DELETE"
                }
            )
            
            const data = await res.json();

            if(data.success === false){
                dispatch(deleteUserFailure(data.errors));
                return;
            }

            dispatch(deleteUserSuccess(data));

        } catch (error) {
            console.log(error,"===error===")
            dispatch(deleteUserFailure(error.errors));
        }

    }

    const handleSignOut = async() => {

        try {
            dispatch(signOutUserStart());
            const res = await fetch("/api/user/signout");
            const data = await res.json();

            if(data.success === false){
                dispatch(signOutUserFailure(data.errors));
                return;
            }

            dispatch(signOutUserSuccess(data));
            
        } catch (error) {
            console.log(error);
            dispatch(signOutUserFailure(error.errors));
        }
    }

    const handleShowListing = async() => {

        try {
            setShowImageListingError(false);
            const res = await fetch(`/api/user/listings/${currentUser.data._id}`);

            const data = await res.json();

            if(data.success === false){
                setShowImageListingError(true);
                return;
            }

            setUserListings(data.data);
            setShowImageListingError(false);
        } catch (error) {
            setShowImageListingError(true);
        }
    }

    const handleListingDelete = async(listingId) => {
        try {
            const res = await fetch(`/api/listing/delete/${listingId}`,{
                method:"DELETE"
            })
            const data = res.json();

            if(data.success===false){
                return;
            }

            setUserListings((prev)=>prev.filter((listing)=>listing._id !== listingId));

        } catch (error) {
            
        }
    }

   

    return (
       <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-center my-10">Profile</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="username" defaultValue={currentUser?.data?.username} id="username" className="border p-3 rounded-lg outline-none" onChange={handleChange} />
        <input type="email" placeholder="Email" defaultValue={currentUser?.data?.email} id="email" className="border p-3 rounded-lg outline-none" onChange={handleChange}/>
        <input type="password" placeholder="Password" className="border p-3 rounded-lg outline-none" />
        <button disabled={loading} className="bg-slate-700 p-3 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80">{loading ? "updating... " : "Update"}</button>


        <Link className="bg bg-green-700 p-3 text-center text-white uppercase rounded-lg hover:opacity-95" to={"/create-listing"}>create Listing</Link>

        </form>
        <div className="flex justify-between mt-5">
         <span onClick={handleDeleteUser} className="text-red-700 cursor-pointer">Delete account</span>
         <span onClick={handleSignOut} className="text-red-700 cursor-pointer">Sign out</span>
        </div>

        <p className="text-red-700 mt-5">{error?error.message:""}</p>
        <p className="text-red-700 mt-5">{updateSuccess?"user updated Ssuccessfully":""}</p>
        <button onClick={handleShowListing} className="text-green-700 w-full">Show Listing</button>
        <p className="text-red-700 mt-5">{showImageListingError?"Error showing listing":""}</p>

        {
            userListings && userListings.length>0 && (
                <div className="flex flex-col gap-4">
                    <h1 className="text-center mt-7 text-2xl font-semibold">Your Listed Blogs</h1>
                    {
                        userListings.map((listing)=>(
                            <div key={listing._id} className="border rounded-lg p-3 flex justify-between items-center gap-4">
                                <Link to={`/listing/${listing._id}`}>
                                <img src={listing.imageUrl} alt="lisitng image" className="h-16 w-16 object-contain" />
                                </Link>
                                <Link to={`/listing/${listing._id}`} className="text-slate-700 font-semibold hover:underline truncate flex-1">
                                    <p>{listing.name}</p>
                                </Link>

                                <div className="flex flex-col items-center">
                                    <button onClick={()=>handleListingDelete(listing._id)} className="text-red-700 uppercase">Delete</button>
                                    <Link to={`/update-listing/${listing._id}`}>
                                    <button className="text-green-700 uppercase">Edit</button>
                                    </Link>
                                </div>

                            </div>
                        ))
                    }
                </div>
            )
        }

    </div>
    )
}


export default Profile;
