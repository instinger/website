import React from "react";
import { Link } from "react-router-dom";

const PortfolioCard = ({imageUrl,title,description,link}) => {
    return(
        <div className="m-10 rounded-lg">

            <Link to={link}>
            <div className="bg-[#F1F5F1] rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                <img className="object-contain" src={imageUrl} alt={title} />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-slate-700">{title}</h3>
                    <p className="mt-1 text-slate-500 text-sm">{description}</p>
                </div>
            </div>
            </Link>
        </div>
    )
}


export default PortfolioCard;