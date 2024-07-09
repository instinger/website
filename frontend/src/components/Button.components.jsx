import React from "react";


const Button = () => {
    return(
        <div className="flex w-[150px] h-[53px] flex-row items-center justify-center">
               <button className="animate-border rounded-full bg-gradient-to-r from-[#fd8d73] via-purple-500 to-yellow-300  bg-[length:400%_400%] p-[1.45px] hover:shadow-md hover:shadow-[#edab9c]">
               <span className="block rounded-full bg-gradient-to-r from-[#0F1FB1] to-[#0254ED] shadow-inner px-6 py-3 font-normal text-white">Show More</span>
               </button>
        </div>
    )
}

export default Button;