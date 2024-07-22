import React from "react";
import Card from "../card";
import { Link } from "react-router-dom";

function Explore(){
    return <div className="flex flex-col gap-3 pt-5 md:pt-8 items-center justify-center bg-[#F7F0F0] pb-10">
        <div className="flex w-full items-center flex-wrap justify-center md:justify-between px-8 md:px-24 gap-8">
            <div className="flex flex-col">
        <h1 className="poppins-semibold text-md sm:text-2xl">Explore All Services</h1>
        <img src="images/graphics/wave.png" alt="a graphic with a wave" className="w-[70px] h-[20px] md:w-[90px] md:h-[30px] relative top-3 md:top-0 right-2"/>
        </div>
        <div className="">
        <Link to="/services" className="relative z-20 bg-white h-10 w-48 sm:h-10 sm:w-48 poppins-medium rounded-full mt-0 flex justify-center items-center text-xs sm:text-lg shadow-lg">Explore More</Link>
        <div className="z-10 h-10 w-48 sm:h-10 sm:w-48 relative bottom-[37px] sm:bottom-[35px] left-[3px] rounded-full ml-0 pl-0 pt-0" style={{ background: 'linear-gradient(93.28deg, #00A7E1 23.14%, #FFA630 87.83%)' }}></div>
        </div>
        </div>
        <div className="flex flex-wrap justify-around gap-10 md:gap-6 mt-2 md:mt-4">
            <Link to=""><Card title="Offset Printing" description="High-speed, multicolor prints with impeccable quality and detail"/>
            </Link>
            <Link to=""><Card title="Foam Banners" description="Durable, visually appealing foam banners designed to make a significant impact."/>
            </Link>
            <Link to=""><Card title="UV Printing" description="Specialized printing with unique, striking visual effects for standout materials."/>
            </Link>
            <Link to=""><Card title="Danglers Printing" description="We are renowned in the market for providing the most reliable services in Danglers Printing."/>
            </Link>
        </div>
        
    </div>
}

export default Explore;