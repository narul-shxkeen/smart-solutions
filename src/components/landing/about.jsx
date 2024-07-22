import React from "react";

function About(){
    return <div className="flex flex-col md:flex-row bg-[#F7F0F0] py-10 px-3 items-center justify-center">
        <div className="flex flex-col gap-4 md:w-1/2">
        <div>
        <h1 className="poppins-semibold text-md sm:text-2xl">About Us</h1>
        <div className="w-[50px] md:w-[100px] h-1" style={{ background: 'linear-gradient(93.28deg, #00A7E1 23.14%, #FFA630 87.83%)' }}></div>
        </div>
        <p className="poppins-medium text-sm sm:text-xl">India’s largest offset printing company</p>
        <p className="poppins-regular text-xs sm:text-lg">
        Welcome to Smart Solutions Print N Pack, a distinguished leader in the printing and advertising materials industry. Located in the vibrant Mayapuri Industrial Area, Phase 1, we have been at the forefront of delivering superior quality services for over 30 years. Our commitment to excellence is reflected in every project we undertake, making us a trusted name among our clients. 
</p>
<img src="images/graphics/wave.png" alt="a graphic with a wave" className="w-[70px] h-[20px] md:w-[90px] md:h-[30px] relative right-2"/>
        </div>
     <img src="images/about_landing.png" alt="image of a machine and a circular graphic"/>   
    </div>
}

export default About;