import React, { useEffect, useState } from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';
import { Autoplay, Pagination } from "swiper/modules";
import image1 from "../assets/2.png";
import image2 from "../assets/3.png";
import image3 from "../assets/1.png";
import aboutUs from "../assets/aboutUs.png";
import { Link } from "react-router-dom";
import Button from "../components/Button.components";
import SliderPortfolio from "../components/SliderPortfolio.components";
import TestimonialMarquee from "../components/Testimonial.components";
import BlogCard from "../components/Blog.components";
import ScrollToTopLink from "../components/ScrollTop.components";


const Home = () => {

    const [listing,setListing] = useState([]);
    const startIndex=0;
    const limit=3;

    useEffect(()=>{
        const fetchListing = async() => {
            const res = await fetch(`https://backend.instinger.com/api/listing/get?startIndex=${startIndex}&limit=${limit}`);
            const data = await res.json();
            setListing(data.data);
        }

        fetchListing();
    },[])


    return(
        <main>
            <Swiper pagination={true} modules={[Pagination,Autoplay]} autoplay={{ delay: 3000 }} loop={true} className="w-full">
                <SwiperSlide>
                    <img src={image1} alt="image_web" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="image_service" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} alt="image_market" />
                </SwiperSlide>
            </Swiper>

            <div className="p-16">
                <h2 className="text-slate-700 text-center font-bold text-2xl sm:text-4xl">Services We offer</h2>

                <div className="mt-20 flex flex-col gap-4 md:flex-row">

                   <div className="bg-[#F1F5F1] border rounded-xl shadow-lg overflow-hidden max-w-xs mx-auto transition duration-500 hover:scale-105">
                        <div className="flex justify-center mt-4">
                        <img
                        className="h-24 w-24 rounded-full"
                        src="https://cdn-icons-png.flaticon.com/512/6352/6352331.png"
                        alt="Service"
                        />
                        </div>

                        <div className="text-center mt-4 px-4 pb-4">
                            <h2 className="text-2xl font-bold text-slate-700">Web Development</h2>
                            <p className="mt-2 text-slate-500"> We build robust, scalable, and user-friendly websites that serve as
                            the foundation of your online presence. Our websites are more than
                            just digital spaces; they're your brand's powerful online ambassadors.</p>
                        </div>
                   </div>

                   <div className="bg-[#F1F5F1] border rounded-xl shadow-lg overflow-hidden max-w-xs mx-auto transition duration-500 hover:scale-105">
                        <div className="flex justify-center mt-4">
                        <img
                        className="h-24 w-24 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHBoSRtnOH19QG4D1k96FxFaaXKxvdM2XgGSAl9iIiQIg74lrojBV1BT1Dym-nX5X_RxI&usqp=CAU"
                        alt="UIUX"
                        />
                        </div>

                        <div className="text-center mt-4 px-4 pb-4">
                            <h2 className="text-2xl font-bold text-slate-700">UI-UX Design</h2>
                            <p className="mt-2 text-slate-500"> Your digital identity starts with captivating design. We craft user-centric interfaces that not only look visually stunning but also ensure a seamless and intuitive user experience.</p>
                        </div>
                   </div>

                   <div className="bg-[#F1F5F1] rounded-xl border shadow-lg overflow-hidden max-w-xs mx-auto transition duration-500 hover:scale-105">
                        <div className="flex justify-center mt-4">
                        <img
                        className="h-24 w-24 rounded-full"
                        src="https://static.vecteezy.com/system/resources/previews/016/717/560/non_2x/seo-business-service-free-png.png"
                        alt="SEO"
                        />
                        </div>

                        <div className="text-center mt-4 px-4 pb-4">
                            <h2 className="text-2xl font-bold text-slate-700">SEO Management</h2>
                            <p className="mt-2 text-slate-500">In the ever-expanding digital landscape, we ensure your business stands out. Our SEO experts work tirelessly to boost your online visibility, drive organic traffic, and secure top-ranking positions on search engines.</p>
                        </div>
                   </div>

                </div>

               <div className="flex justify-center mt-20">
                <ScrollToTopLink to={"/service"}><Button/></ScrollToTopLink>
               </div>
               
            </div>

            {/* about */}

            <div className="flex flex-col md:flex-row mt-5">

                <div className=" flex flex-col mx-20 gap-4 flex-1">
                    <h3 className="text-sm font-semibold text-slate-600">More About Us</h3>
                    <h2 className="font-bold text-2xl sm:text-4xl text-slate-700">
                    We Have A Deep <br /> Habit
                    Of <br /> Understanding.</h2>
                    <p className="text-slate-500">At Instinger, we are more than just a company;
                     we are <br /> a collective of digital enthusiasts driven by a shared passion for
                      innovation and excellence. Established by a team of seasoned professionals,
                       we bring years of experience and a deep <br />
                       understanding of the ever-evolving digital landscape</p>
                    
                    <ScrollToTopLink to={"/about"} className="mt-6"><Button/></ScrollToTopLink>
                </div>

                <div className="">
                    <img src={aboutUs} alt="About Us" />
                </div>
            </div>


            {/* portfolio */}

            <div className="mt-16 text-center">
                <h3 className="text-slate-600 font-semibold text-sm">Portfolio</h3>
                <h2 className="text-2xl sm:text-4xl font-bold text-slate-700 mt-5">The Works We Are Proud Of</h2>

                
               <div className="flex flex-col justify-center items-center">
               <SliderPortfolio/>
                <ScrollToTopLink to={"/portfolio"}>
                  <Button/>
                </ScrollToTopLink>
               </div>
            </div>

            {/* testimonials */}

            <div className="flex flex-col justify-center items-center mt-16">
                <h3 className="text-slate-600 font-semibold text-sm">Testimonials</h3>
                <h2 className="mt-3 text-2xl sm:text-4xl font-semibold text-slate-700 text-center"><
                    span className="font-bold text-slate-500">Ins</span><span className="font-bold text-slate-700">tinger</span> grows with <span className="text-slate-500">you</span>!</h2>
                
                <div className="mt-20 w-[90%]">
                    <TestimonialMarquee/>
                </div>
            </div>

            {/* blog sction */}

            <div className="mt-20 flex flex-col justify-center items-center">
                <h3 className="text-slate-600 font-semibold text-sm">Blog</h3>
                <h2 className="mt-3 text-slate-700 text-center sm:text-4xl text-2xl font-bold">Hear from Us</h2>

             <div className="p-6">
             <div className="flex gap-8 sm:flex-row flex-col">
             {listing && listing.map((listing,index) => (
             <ScrollToTopLink key={listing._id || index} to={"/blog"}>
             <BlogCard
                title={listing.name}
                description={listing.description}
                date={listing.date}
                imageUrl={listing.imageUrl}     
              
            />
            </ScrollToTopLink>
             ))}
         </div>
        </div>
      </div>
    
</main>
)
}

export default Home;