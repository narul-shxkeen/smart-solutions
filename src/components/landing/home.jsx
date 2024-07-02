import React from "react";
import { NavLink } from "react-router-dom";

function Home() {    
    return (
        <div>
            <img src="images/landingImage.png" alt="Landing Image" className="absolute w-full h-[80vh] sm:h-[90vh] object-cover -z-20"/>
            <div className="flex flex-col justify-center items-center h-[90vh] gap-6 mx-3 sm:mx-40">
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-[3fr,7fr] grid-rows-2 gap-y-1 gap-x-1 px-0">
            <div className="">
            <h3 className="poppins-medium text-md sm:text-2xl text-white mx-0">Welcome to</h3>
            </div>
            <div>
            <h3 className="poppins-medium text-md sm:text-2xl text-white mx-0">Smart Solutions Print N Pack</h3>
            </div>
            <div></div>
            <img src="images/Line 1.png" alt="a blue line which underlines the company's name" className=""/>
            </div>
            </div>
            <h1 className="poppins-bold text-lg sm:text-4xl text-center text-white leading-normal">Your Trusted Partner in <span className="text-[#FFA630]">Superior Quality Printing</span> and Advertising Materials</h1>
            <NavLink to="/contact" className="bg-white h-10 w-48 sm:h-16 sm:w-72 poppins-medium rounded-full mt-0 flex justify-center items-center text-xs sm:text-lg">Let's Talk - Send a message</NavLink>
            <div className="-z-10 h-10 w-48 sm:h-16 sm:w-72 relative bottom-[60px] sm:bottom-[83px] left-[3px] rounded-full ml-0 pl-0 pt-0" style={{ background: 'linear-gradient(93.28deg, #00A7E1 23.14%, #FFA630 87.83%)' }}>
            </div>
            </div>
        </div>
    );
}

export default Home;