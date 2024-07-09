import React from "react";
import TestimonialMarquee from "../components/Testimonial.components";


const About = () => {
    return(
        <div className="mx-auto">
            <h1 className="text-center text-slate-700 text-4xl font-bold p-6 mt-7">About Us</h1>

            <div className="flex flex-col sm:flex-row">
                <div className="flex flex-col mx-auto">
                    <h2 className="text-2xl font-semibold text-slate-700 p-3">Our Story</h2>
                    <p className="text-slate-500 text-sm sm:text-lg p-3">Instinger, born from the vision of two dynamic minds in 2022 in Kolkata is a leading force in the digital realm. We are more than a company, we’re your partner in growth.</p>
                    <p className="text-slate-500 text-sm sm:text-lg p-3">Our journey began with a simple yet ambitious goal – to transform businesses and organizations by harnessing the power of the digital world.</p>
                    <p className="text-slate-500 text-sm sm:text-lg p-3">Today, we stand as a beacon of innovation, driving success for our clients through website/app development and digital marketing expertise. Our core believe is to provide satisfactory User Experience to our clients.</p>
                </div>
                <div className="flex justify-center items-center mx-10">
                    <img src="https://instinger.com/wp-content/uploads/2023/10/Ellipse-1-copy-5.png" alt="image" />
                </div>
            </div>


            <div className="div">
                <div className="div"></div>
                <div className="div"></div>
            </div>



           <div className="text-center mt-16">
            <h2 className="text-4xl font-bold text-slate-700">From our Customers</h2>
              <div className="mt-5"> <TestimonialMarquee /></div>
           </div>

        </div>
    )
}

export default About;