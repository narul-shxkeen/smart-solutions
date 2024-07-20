import React from "react";

function OrangeSection() {
    return <div className="bg-[#F7F0F0]">
        <div className="flex flex-row-reverse justify-between">
        <img className="h-[60px] w-[130px] md:h-[110px] md:w-[220px] relative top-11" src="images/graphics/Mask group.png" alt="a graphic with eight tilted orange lines"/>
        <img className="h-[73px] w-[40px] md:h-[83px] md:w-[53px] relative top-8 left-5 md:top-11 md:left-10" src="images/graphics/dots.png" alt="a graphic with a rectangle made of dots"/>
        </div>
    <div className="bg-[#FFA630] flex flex-col gap-6 md:gap-10 justify-around items-center py-10 md:py-20 px-14">
<h1 className="poppins-semibold text-lg sm:text-4xl text-center md:px-44">Delivering superior quality Printing Services for over 30 years</h1>
<p className="poppins-regular text-xs sm:text-base text-justify md:text-center">
At Smart Solutions Print N Pack, we are not just in the business of printing; we are in the business of providing smart solutions to your advertising challenges. Our team of skilled professionals is dedicated to delivering exceptional results that drive success for our clients.</p>
    </div>
    </div>
}

export default OrangeSection;