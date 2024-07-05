import React from "react";
import {Link } from "react-router-dom";

function Footer() {
    return <div>
        <div className="flex justify-around py-3">
    <div className="flex flex-col gap-2 w-[100px] sm:w-[200px]">
    <img src="images/Logo.png" alt="logo" className="h-8 w-[100px] sm:h-12 sm:w-[200px]"/>
    <p className="poppins-medium text-xs sm:text-base">Phone: <span className="text-[#00A7E1]">9810018313</span></p>
    <p className="poppins-medium text-xs sm:text-base w-[100px] sm:w-[200px]">Email: <span className="text-[#00A7E1]">smartsolutionsprintnpack@gmail.com</span></p>
    </div>

<div className="flex flex-col">
<p className="poppins-semibold text-sm sm:text-xl">Navigation</p>
<Link to="/" className="poppins-medium text-sm xs:text-base">Home</Link>
<Link to="/contact" className="poppins-medium text-xs sm:text-base">About</Link>
<Link to="/services" className="poppins-medium text-xs sm:text-base">Services</Link>
<Link to="/clients" className="poppins-medium text-xs sm:text-base">Clients</Link>
<Link to="/contact" className="poppins-medium text-xs sm:text-base">Contact</Link>
</div>

<div className="flex flex-col">
<p className="poppins-semibold text-sm sm:text-xl">Legal</p>
<Link className="poppins-medium text-xs sm:text-base">Privacy Policy</Link>
<Link className="poppins-medium text-xs sm:text-base">Terms of service</Link>
</div>   
</div>
    <p className="poppins-semibold text-xs sm:text-base text-center">© 2021 Smart Solutions Print N Pack. All Rights Reserved.</p>
    </div>
}


export default Footer;