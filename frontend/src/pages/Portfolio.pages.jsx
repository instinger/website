import React from "react";
import { Link } from "react-router-dom";
import task from "../assets/task.png";
import skydes from "../assets/skydes.png";
import chicwhiz from "../assets/chicwhiz.png";
import audit from "../assets/audit.png";
import yoga from "../assets/yoga.png";
import PortfolioCard from "../components/Portfolio.components";


const portfolioItems = [
    {
        imageUrl:task,
        title:"TaskTechRecruiters",
        description:"TaskTechRecruiter is a leading employment agency based in the USA, dedicated to bridging the gap between students and their dream careers. We provide comprehensive training programs that equip students with the necessary skills and knowledge to excel in their chosen fields.",
        link:"https://tasktechrecruiters.com/"
    },
    {
        imageUrl:skydes,
        title:"SkyDesireGlobal",
        description:"SkyDesire Global is one of the top career employment agencies in the USA, and the foundation of all we do is to match our network firms with the best possible candidates for any open positions. For our clients, we offer cutting-edge workforce and HR solutions.",
        link:"https://skydesireglobal.com/"
    },
    {
        imageUrl:chicwhiz,
        title:"ChicWhiz",
        description:"ChicWhiz is a leading provider of high-quality, affordable, and sustainable clothes. Our products are designed to enhance your lifestyle, offering a wide range of options that cater to your unique tastes and preferences.",
        link:"https://chicwhiz.com/"
    },
    {
        imageUrl:audit,
        title:"AuditHub",
        description:"It is a freelancing platform that connects individuals and organizations with top-tier service professionals for short-term or permanent assignments throughout India",
        link:"https://audithub.in/"
    },
    {
        imageUrl:yoga,
        title:"Aadiyogshakti",
        description:"Explore the power of yoga with right guidance and training. Aadiyogshakti is a leading yoga training center in India, offering a wide range of programs that cater to all levels of experience and expertise.",
        link:"https://aadiyogshakti.com/"
    }
]



const Portfolio = () => {
   
    return(
        <div className="m-10">
            <h2 className="text-center text-4xl font-semibold text-slate-700 border-b p-3">Featured Projects</h2>
            <p className="p-3 text-slate-600 text-center">
            Discover our latest and most impactful projects, showcasing our commitment to excellence and innovation. Each project highlights our expertise in delivering customized solutions that drive success and create lasting value for our clients. Explore the diverse range of projects that demonstrate our ability to meet unique challenges with creative and effective strategies.
            </p>

            <div className="flex flex-wrap">
                    {portfolioItems.map((item, index) => (
                        <PortfolioCard 
                            key={index} 
                            imageUrl={item.imageUrl} 
                            title={item.title} 
                            description={item.description} 
                            link={item.link} 
                        />
                    ))}
            </div>

        </div>
    )
}

export default Portfolio;