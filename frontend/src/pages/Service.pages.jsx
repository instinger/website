import React from "react";
import FAQ from "../components/FAQ.components";


const Service = () => {
    return(
        <main>
            <div className="m-10 text-center">
                <h2 className="text-3xl font-semibold text-slate-800">Serving the best with <span className="text-slate-500 font-bold">Ins</span><span className="text-slate-700 font-bold">tinger</span></h2>
                <p className="m-4 text-slate-600 text-center">The services are the cornerstones of our commitment to helping you thrive in the digital realm. With Instinger, your digital success story begins here.</p>
            </div>

            <div className="m-20 flex flex-col md:flex-row flex-wrap gap-4">

                   <div className="bg-[#F1F5F1] mt-2 border rounded-xl shadow-lg overflow-hidden max-w-xs mx-auto transition duration-500 hover:scale-105">
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

                   <div className="bg-[#F1F5F1] mt-2 border rounded-xl shadow-lg overflow-hidden max-w-xs mx-auto transition duration-500 hover:scale-105">
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

                   <div className="bg-[#F1F5F1] mt-2 rounded-xl border shadow-lg overflow-hidden max-w-xs mx-auto transition duration-500 hover:scale-105">
                        <div className="flex justify-center mt-4">
                        <img
                        className="h-24 w-24 rounded-full"
                        src="https://instinger.com/wp-content/uploads/2023/11/seo-removebg-preview-300x298.png"
                        alt="SEO"
                        />
                        </div>

                        <div className="text-center mt-4 px-4 pb-4">
                            <h2 className="text-2xl font-bold text-slate-700">SEO Management</h2>
                            <p className="mt-2 text-slate-500">In the ever-expanding digital landscape, we ensure your business stands out. Our SEO experts work tirelessly to boost your online visibility, drive organic traffic, and secure top-ranking positions on search engines.</p>
                        </div>
                   </div>

                   <div className="bg-[#F1F5F1] mt-4 border rounded-xl shadow-lg overflow-hidden max-w-xs mx-auto transition duration-500 hover:scale-105">
                        <div className="flex justify-center mt-4">
                        <img
                        className="h-24 w-24 rounded-full"
                        src="https://cdn3d.iconscout.com/3d/premium/thumb/app-development-6849309-5618483.png"
                        alt="app"
                        />
                        </div>

                        <div className="text-center mt-4 px-4 pb-4">
                            <h2 className="text-2xl font-bold text-slate-700">App Development</h2>
                            <p className="mt-2 text-slate-500"> We build robust, scalable, and user-friendly apps that serve as
                            the foundation of your digital presence.</p>
                        </div>
                   </div>

                   <div className="bg-[#F1F5F1] mt-4 border rounded-xl shadow-lg overflow-hidden max-w-xs mx-auto transition duration-500 hover:scale-105">
                        <div className="flex justify-center mt-4">
                        <img
                        className="h-24 w-24 rounded-full"
                        src="https://c8.alamy.com/comp/2BXMAP1/data-analysis-icon-market-research-flat-vector-illustration-2BXMAP1.jpg"
                        alt="data"
                        />
                        </div>

                        <div className="text-center mt-4 px-4 pb-4">
                            <h2 className="text-2xl font-bold text-slate-700">Data Analysis</h2>
                            <p className="mt-2 text-slate-500"> Unlock the power of your data with Instinger's Data Analysis services. Our expert team delivers actionable insights through advanced analytical techniques, helping you make informed decisions and drive business growth.</p>
                        </div>
                   </div>

                   <div className="bg-[#F1F5F1] mt-4 border rounded-xl shadow-lg overflow-hidden max-w-xs mx-auto transition duration-500 hover:scale-105">
                        <div className="flex justify-center mt-4">
                        <img
                        className="h-24 w-24 rounded-full"
                        src="https://as2.ftcdn.net/v2/jpg/02/04/22/57/1000_F_204225754_QJIMvIg5Y3BLpODnyXUBxir6TdG2nWF3.jpg"
                        alt="market"
                        />
                        </div>

                        <div className="text-center mt-4 px-4 pb-4">
                            <h2 className="text-2xl font-bold text-slate-700">Digital Marketing</h2>
                            <p className="mt-2 text-slate-500"> We build robust, scalable, and user-friendly websites that serve as
                            the foundation of your online presence. Our websites are more than
                            just digital spaces; they're your brand's powerful online ambassadors.</p>
                        </div>
                   </div>

            </div>


            <div>
                <FAQ/>
            </div>


        </main>
    )
}

export default Service;