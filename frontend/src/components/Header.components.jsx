import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setIsMenuOpen(false); // Close the menu after navigation
    };

    const userGreeting = currentUser ? (
        <p className="font-semibold">Hi {currentUser?.data?.username}</p>
    ) : (
        <p className="text-slate-700 hover:text-slate-500 cursor-pointer">Sign in</p>
    );

    const NavLink = ({ to, children }) => (
        <li 
            className="text-slate-700 hover:text-slate-500 cursor-pointer"
            onClick={() => handleNavigation(to)}
        >
            {children}
        </li>
    );

    return (
        <header className="bg-slate-200 shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-6">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    <h1 className="font-bold text-sm sm:text-xl flex flex-wrap cursor-pointer">
                        <span className="text-slate-500 text-xl">Ins</span>
                        <span className="text-slate-700 text-xl">tinger</span>
                    </h1>
                </Link>
                
                {/* Menu button for mobile */}
                <button 
                    className="sm:hidden text-slate-700 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Desktop menu */}
                <ul className="hidden sm:flex gap-8 items-center">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/service">Service</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to='/profile'>{userGreeting}</NavLink>
                </ul>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="sm:hidden bg-slate-200 p-4">
                    <ul className="flex flex-col gap-4">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/service">Service</NavLink>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to='/profile'>{userGreeting}</NavLink>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;