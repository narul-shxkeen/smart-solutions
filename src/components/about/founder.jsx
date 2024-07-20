import React from "react";

function Founder(){
    return <div className="flex flex-col md:flex-row bg-[#F7F0F0] py-10 px-3 items-center justify-center">
        <div className="flex flex-col gap-4 md:w-1/2">
        <div className="flex flex-col">
        <h1 className="poppins-semibold text-md sm:text-2xl">Get to Know our Founder & CEO</h1>
        <div className="relative left-[133px] md:left-[200px] w-[117px] md:w-[175px] h-1" style={{ background: 'linear-gradient(93.28deg, #00A7E1 23.14%, #FFA630 87.83%)' }}></div>
        </div>
        <p className="poppins-medium text-sm sm:text-lg">Sumit Kohli</p>
        <p className="poppins-regular text-xs sm:text-base">
        Our founder and CEO, with over 30 years of experience in the industry, has mastered the field of offset printing. He completed his studies at Delhi University, bringing a wealth of knowledge and expertise to the company. His visionary leadership and deep industry insights have been instrumental in establishing and growing our business to its current heights.</p>
        </div>
     <img src="images/sumitKohli.png" alt="image of the founder of india's largest printing company"/>   
    </div>
}

export default Founder;