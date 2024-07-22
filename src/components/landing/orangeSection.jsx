import React from "react";
import { Link } from "react-router-dom";

function OrangeSection() {
    return <div className="bg-[#F7F0F0]">
        <img className="h-[60px] w-[130px] md:h-[110px] md:w-[220px] relative top-11" src="images/graphics/Mask group.png" alt="a graphic with eight tilted orange lines"/>
    <div className="bg-[#FFA630] flex flex-col gap-6 md:gap-10 justify-around items-center py-10 md:py-20">
<h1 className="poppins-semibold text-lg sm:text-4xl w-[400px] md:w-[700px] text-center">India’s leading in-house foam manufacturing company</h1>
<div className="flex gap-20 justify-around flex-col md:flex-row">
    <div>
        <img src="images/behind_layer.png" alt="a graphic with a layer behind" className="absolute z-10 h-[200px] w-[200px] md:w-[440px] md:h-[370px]"/>
        <img src="images/minions.png" alt="a graphic with a layer in front" className="relative top-[116px] left-[150px] mb-10 md:mb-20 z-20 h-[200px] w-[200px] md:w-[350px] md:h-[350px]"/>
    </div>
    <div className="flex flex-col items-center justify-center gap-6 w-full md:w-1/2">
<p className="poppins-regular text-xs sm:text-lg text-justify px-10">
As one of the leading in-house foam manufacturers in India with over 30 years of industry expertise, we pride ourselves on utilizing cutting-edge Kolsite machinery to produce exceptional quality foam products. Our advanced production capabilities ensure stringent quality control, allowing us to deliver superior foam solutions tailored to the diverse needs of our customers.
</p>
<div className="">
        <Link to="/about" className="relative z-20 bg-white h-10 w-48 sm:h-10 sm:w-48 poppins-medium rounded-full mt-10 flex justify-center items-center text-xs sm:text-lg shadow-lg">Know More</Link>
        <div className="z-10 h-10 w-48 sm:h-10 sm:w-48 relative bottom-[37px] sm:bottom-[35px] left-[3px] rounded-full ml-0 pl-0 pt-0" style={{ background: 'linear-gradient(93.28deg, #00A7E1 23.14%, #FFA630 87.83%)' }}></div>
        </div>
    </div>
</div>
    </div>
    </div>
}

export default OrangeSection;