import React from "react";
import { NavLink } from "react-router-dom";

function Home() {    
    return (
        <div>
            <img src="images/landingImage.png" alt="Landing Image" className="absolute h-[70vh] w-auto sm:w-full sm:h-auto object-cover -z-20"/>
            <div className="flex flex-col justify-center items-center h-[90vh] gap-6 mx-3 sm:mx-40">
            <h3 className="poppins-medium text-md sm:text-2xl text-white">Welcome to Smart Solutions Print N Pack</h3>
            <img src="images/Line 1.png" alt="a blue line which underlines the company's name" className="absolute hidden lg:block lg:top-[17rem] lg:left-[34.5rem]"/>
            <h1 className="poppins-bold text-lg sm:text-4xl text-center text-white leading-normal">Your Trusted Partner in <span className="text-[#FFA630]">Superior Quality Printing</span> and Advertising Materials</h1>
            <NavLink to="/contact" className="bg-white h-12 w-60 sm:h-16 sm:w-72 poppins-medium rounded-full mt-0 flex justify-center items-center text-s sm:text-lg">Let's Talk - Send a message</NavLink>
            <div className="-z-10 h-12 w-60 sm:h-16 sm:w-72 relative bottom-[70px] sm:bottom-[83px] left-[3px] rounded-full ml-0 pl-0 pt-0" style={{ background: 'linear-gradient(93.28deg, #00A7E1 23.14%, #FFA630 87.83%)' }}>
            </div>
            </div>
        </div>
    );
}

export default Home;