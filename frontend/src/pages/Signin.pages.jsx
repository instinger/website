import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { signInStart,signInFailure,signInSuccess } from "../redux/user/userSlice";

const Signin = () => {

    const [formData,setFormData] = useState({});
    // const [loading,setLoading] = useState(false);
    // const [error,setError] = useState(null);

    const {loading,error} = useSelector((state)=>state.user);

    const navigate = useNavigate();

    const dispatch = useDispatch();


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]:e.target.value
        })
    }

    const handleSubmit = async(e) => {

        e.preventDefault();

        try {
            
           dispatch(signInStart());
            
            const res = await fetch("/api/user/login",
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(formData)
                }
            )

            const data = await res.json();
            console.log(data,"===data===");

            if(data.success === false){
                // setError(data.errors);
                // console.log(data.errors,"===errors===");
                // setLoading(false);
                dispatch(signInFailure(data.errors));
                return;
            }

            // setLoading(false);
            // setError(null);
            dispatch(signInSuccess(data));

            navigate("/");

        } catch (error) {
            console.log(error,"===error===");
            // setLoading(false);
            // setError(error.errors);
            dispatch(signInFailure(error.errors));
        }
    }

    


    return(
       <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="email" placeholder="Email" id="email" className="border p-3 rounded-lg outline-none" onChange={handleChange}/>
            <input type="password" placeholder="Password" id="password" className="border p-3 rounded-lg outline-none" onChange={handleChange}/>
            {/* <input type="text" placeholder="Access Key" id="accesskey" className="border p-3 rounded-lg outline-none"onChange={handleChange}/> */}
            <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">{loading ? "loading...":"Sign In"}</button>
        </form>
        <div className="flex gap-2 mt-5">
            <p>Don't Have an account?</p>
            <Link to={"/signup"}>
                <span className="text-blue-700">Sign up</span>
            </Link>
        </div>
        {error && <p className="text-red-500 text-center mt-5">{error}</p>}
       </div>
    )
}

export default Signin;