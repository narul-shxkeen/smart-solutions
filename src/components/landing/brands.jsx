import React from "react";

function Brands() {
    return <div className="flex flex-col items-center gap-4 pb-10">
        <div className="flex justify-end items-end w-full relative top-[20px] md:top-[40px] pr-9 z-10">
            <img className="h-[50px] w-[60px] sm:h-full sm:w-auto" src="images/graphics/Slice 1.png" alt="some image with a semicircle under a dotted rectangle"/>
        </div>
         <div className="flex flex-col gap-1 items-end">
        <h1 className="poppins-semibold text-md sm:text-2xl z-20">Trusted by Leading Brands</h1>
        <div className="w-[126px] md:w-[190px] h-1" style={{ background: 'linear-gradient(93.28deg, #00A7E1 23.14%, #FFA630 87.83%)' }}></div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
            <img src="images/b5.png" alt="coke"/>
            <img src="images/b6.png" alt="pepsi"/>
            <img src="images/b3.png" alt="brittania"/>
            <img src="images/b8.png" alt="nestle"/>
        </div>

    </div>}


export default Brands;