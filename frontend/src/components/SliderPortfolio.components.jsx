import React from "react";
import {Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';
import { Pagination,Autoplay, EffectCoverflow } from "swiper/modules";
import yoga from "../assets/yoga.png";
import audit from "../assets/audit.png";
import task from "../assets/task.png";
import chicwhiz from "../assets/chicwhiz.png";


const Items = [
    {
        imageUrl: yoga,
        title: "Aadiyogshakti",
        categories: "Web Development • UI/UX Design",
    },
    {
        imageUrl: audit,
        title: "AuditHub",
        categories: "Web Development • UI/UX Design",
    },
    {
        imageUrl:task,
        title: "TaskTechRecruiters",
        categories: "Web Development • UI/UX Design",
    },
    {
        imageUrl:chicwhiz,
        title: "ChicWhiz",
        categories: "Web Development • UI/UX Design",
    }
]

const SliderPortfolio = () => {
    return(
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

            <Swiper 
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination,Autoplay]}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="w-[100%]"
            >

                {Items.map((item,index) => (
                    <SwiperSlide key={index}>
                        <div className="relative">
                            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-contain rounded-lg"/>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                                <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                                <p className="text-slate-300">{item.categories}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    )
}


export default SliderPortfolio;