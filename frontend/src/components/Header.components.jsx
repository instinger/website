import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

    const {currentUser} = useSelector((state) => state.user);
    // console.log(currentUser.data.user.username,"===currentUser===")
    // console.log(currentUser,"===currentUser===")

    return (
        <header className="bg-slate-200 shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-6">
                <Link to="/">
                    <h1 className="font-bold text-smm sm:text-xl flex flex-wrap cursor-pointer">
                        <span className="text-slate-500 text-xl">Ins</span>
                        <span className="text-slate-700 text-xl">tinger</span>
                    </h1>
                </Link>

               <ul className="flex gap-8">
                    <Link to="/"><li className="hidden sm:inline text-slate-700 hover:text-slate-500 cursor-pointer">Home</li></Link>
                    <Link to="/about"><li className="hidden sm:inline text-slate-700 hover:text-slate-500 cursor-pointer">About</li></Link>
                    <Link to="/service"><li className="hidden sm:inline text-slate-700 hover:text-slate-500 cursor-pointer">Service</li></Link>
                    <Link to="/portfolio"><li className="hidden sm:inline text-slate-700 hover:text-slate-500 cursor-pointer">Portfolio</li></Link>
                    <Link to="/blog"><li className="hidden sm:inline text-slate-700 hover:text-slate-500 cursor-pointer">Blog</li></Link>
                    <Link to="/contact"><li className="hidden sm:inline text-slate-700 hover:text-slate-500 cursor-pointer">Contact</li></Link>

                    <Link to='/profile'>
                    {currentUser ? (
                     <p className="font-semibold">Hi {currentUser?.data?.username}</p>
                    
                ) 
                    :(<li className="text-slate-700 hover:text-slate-500 cursor-pointer">Sign in</li>)}
                </Link>
               </ul>
            </div>
        </header>
    )
}

export default Header;