import React from "react";
import TestimonialMarquee from "../components/Testimonial.components";
import about2 from "../assets/about2.png";
import aboutUs from "../assets/aboutUs.png";

const About = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-slate-700 text-3xl sm:text-4xl font-bold p-4 sm:p-6 mt-4 sm:mt-7">About Us</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex flex-col flex-1">
                    <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 p-2 sm:p-3">Our Story</h2>
                    <p className="text-slate-500 text-sm sm:text-base p-2 sm:p-3">Instinger, born from the vision of two dynamic minds in 2022 in Kolkata is a leading force in the digital realm. We are more than a company, we're your partner in growth.</p>
                    <p className="text-slate-500 text-sm sm:text-base p-2 sm:p-3">Our journey began with a simple yet ambitious goal – to transform businesses and organizations by harnessing the power of the digital world.</p>
                    <p className="text-slate-500 text-sm sm:text-base p-2 sm:p-3">Today, we stand as a beacon of innovation, driving success for our clients through website/app development and digital marketing expertise. Our core believe is to provide satisfactory User Experience to our clients.</p>
                </div>
                <div className="flex justify-center items-center">
                    <img src={aboutUs} alt="image" className="max-w-full h-auto" />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-12 sm:mt-16">
                <h2 className="text-slate-700 font-bold text-3xl sm:text-4xl text-center">Our Value</h2>
                <p className="mt-6 sm:mt-10 text-base sm:text-lg p-2 sm:p-3 text-slate-500 text-center">At Instinger, we're more than just a web development and digital marketing company – we're your partners in online success. Our journey began with a vision to empower businesses with cutting-edge digital solutions and strategies. We're founded on a set of core values that drive everything we do:</p>
                <p className="mt-6 sm:mt-10 text-lg sm:text-xl font-semibold text-center">Customer-centric Research and Adaptable TeamWork for Excellence.</p>
            </div>

            <h2 className="mt-12 sm:mt-20 text-center text-3xl sm:text-4xl font-bold text-slate-700">Vision & Mission</h2>

            <div className="flex flex-col lg:flex-row gap-8 mt-8 sm:mt-10">
                <div className="flex flex-col flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-700">Vision</h3>
                    <p className="text-slate-500 mt-2 sm:mt-4 text-sm sm:text-base">Instinger aims to be the go-to partner for organizations seeking to unlock their full potential through the online realm. Our vision is to create a digital landscape where innovation knows no bounds and success is a shared journey.</p>
                    
                    <h3 className="text-slate-700 font-semibold mt-6 sm:mt-8 text-xl sm:text-2xl">Mission</h3>
                    <p className="text-slate-500 mt-2 sm:mt-4 text-sm sm:text-base">At Instinger, our mission is to empower businesses with cutting-edge digital solutions. We strive to create user-centric websites that are not just functional but also captivating, while our digital marketing strategies are designed to boost brand visibility and growth. Our purpose is to be a catalyst for our clients' achievements, transforming their online presence into a dynamic force for progress.</p>
                </div>
                <div className="flex justify-center items-center">
                    <img src={about2} alt="about" className="max-w-full h-auto" />
                </div>
            </div>

            <div className="text-center mt-12 sm:mt-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-700">From our Customers</h2>
                <div className="mt-4 sm:mt-5">
                    <TestimonialMarquee />
                </div>
            </div>
        </div>
    )
}

export default About;