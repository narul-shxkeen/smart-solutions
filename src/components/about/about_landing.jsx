import react from "react";


function Landing(){
    return <div className="flex flex-col-reverse md:flex-row gap-8 bg-[#37393A] ">
        <img src="images/landingImage.png" alt="image of biggest printing machine" className="w-full md:w-1/2 h-1/2 md:h-[70vh] object-cover"/>
        <div className="flex justify-between order-1 md:order-2 py-7 md:py-0">
        <div className="absolute md:relative flex flex-col gap-6 justify-start md:justify-center w-full px-14 md:px-0 items-center md:items-start md:w-2/3 ">
        <h3 className="poppins-semibold text-base sm:text-4xl text-[#FFA630] mx-0">About Us</h3>
        <p className="text-white poppins-regular text-sm sm:text-lg z-20">Smart Solutions Print N Pack is a distinguished leader in the printing and advertising materials industry. Located in the vibrant Mayapuri Industrial Area, Phase 1, we have been at the forefront of delivering superior quality services for over 30 years. Our commitment to excellence is reflected in every project we undertake, making us a trusted name among our clients. </p>
        </div>
        <div className="md:w-1/6 relative z-10">
        <img src="images/graphics/smallEllipse.svg" alt="small ellipse graphic" className="relative left-[90vw] md:left-10 top-[60px] md:top-[100px] h-[112px] md:h-40"/>
        <img src="images/graphics/largeEllipse.svg" alt="large ellipse graphic" className="relative left-[80vw] md:left-0 h-40 md:h-64"/>
        </div>
        </div>

    </div>
}

export default Landing;