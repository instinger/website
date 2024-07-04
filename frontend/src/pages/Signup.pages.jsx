import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {


    const [fromData,setFormData] = useState({});
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    const navigate = useNavigate();

    console.log(error,"===error===");


    const handleChange = (e) => {
        setFormData({
            ...fromData,
            [e.target.id]:e.target.value,
        })
    }


    const handleSubmit = async(e) => {
        e.preventDefault();


       try {

         setLoading(true);
         
         const res = await fetch("/api/user/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(fromData),
         })

         const data = await res.json();

        

         if(data.success===false){
            setError(data.errors);
            setLoading(false);
            return;
         }

         setLoading(false);
         setError(null);

         navigate("/signin");
         console.log(data,"===data===");

       } catch (error) {

        setLoading(false);
        setError(error.errors);
       }
        
    }



    return(
        <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" placeholder="Username" id="username" className="border p-3 rounded-lg outline-none" onChange={handleChange}/>
            <input type="email" placeholder="Email" id="email" className="border p-3 rounded-lg outline-none" onChange={handleChange}/>
            <input type="password" placeholder="Password" id="password" className="border p-3 rounded-lg outline-none" onChange={handleChange}/>
            <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">{loading ? "loading...":"Sign Up"}</button>
        </form>
        <div className="flex gap-2 mt-5">
            <p>Have an account?</p>
            <Link to={"/signin"}>
                <span className="text-blue-700">Sign In</span>
            </Link>
        </div>
        {error && <p className="text-red-500 text-center my-3">{error}</p>}
       </div>
    )
}

export default Signup;