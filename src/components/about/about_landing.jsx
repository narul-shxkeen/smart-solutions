import react from "react";


function Landing(){
    return <div className="flex flex-col-reverse md:flex-row gap-8 bg-[#37393A]">
        <img src="images/landingImage2.jpeg" alt="image of biggest printing machine" className="w-full md:w-1/2 h-1/2 md:h-[95vh] object-cover"/>
        <div className="flex justify-between order-1 md:order-2 py-7 md:py-0 h-[200vh] md:h-auto">
        <div className="absolute md:relative flex flex-col gap-6 justify-start md:justify-center w-full px-14 md:px-0 py-10 items-center md:items-start md:w-5/6 ">
        <h3 className="poppins-semibold text-base sm:text-4xl text-[#FFA630] mx-0">About Us</h3>
        <p className="text-white poppins-regular text-sm sm:text-lg z-20 text-justify md:text-left">Welcome to Smart Solutions Print N Pack, a distinguished leader in the printing and advertising materials industry, proudly serving from vibrant Mayapuri Industrial Area, Phase 1, for<span className="gradient-text"> over 30 years</span>. Our mission is to provide our esteemed clients with the best-adapted and innovative substrate solutions for all their advertising and packaging needs.

At Smart Solutions Print N Pack, we specialize in innovative and sustainable substrate manufacturing. Our expertise encompasses plastic films that excel in printability, viewability, durability, and cost-effectiveness. Our unwavering commitment to excellence and superior quality in every project we undertake has made us a trusted name in the printing and advertising industry. 

Experience unparalleled service and innovative solutions with Smart Solutions Print N Pack, your premier choice for printing, advertising, and packaging materials.</p>
        </div>
        <div className="md:w-1/6 relative z-10">
        <img src="images/graphics/smallEllipse.svg" alt="small ellipse graphic" className="relative left-[90vw] md:left-10 top-[60px] md:top-[100px] h-[112px] md:h-40"/>
        <img src="images/graphics/largeEllipse.svg" alt="large ellipse graphic" className="relative left-[80vw] md:left-0 h-40 md:h-64"/>
        </div>
        </div>

    </div>
}

export default Landing;