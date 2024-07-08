import React from "react";
import { Link } from "react-router-dom";

function Promo(){
    return <div className="flex flex-col gap-10 justify-around items-center py-10" style={{ background: 'linear-gradient(93.28deg, #00A7E1 23.14%, #FFA630 87.83%)' }}>
        <h1 className="tex-lg md:text-4xl poppins-semibold text-white">Ready to get some custom prints?</h1>
        <div className="">
        <Link to="/contact" className="relative z-20 bg-white h-10 w-48 sm:h-10 sm:w-48 poppins-medium rounded-full mt-0 flex justify-center items-center text-xs sm:text-lg shadow-lg">Place Order!</Link>
        <div className="z-10 h-10 w-48 sm:h-10 sm:w-48 relative bottom-[37px] sm:bottom-[35px] left-[3px] rounded-full ml-0 pl-0 pt-0" style={{ background: 'linear-gradient(93.28deg, #00A7E1 23.14%, #FFA630 87.83%)' }}></div>
        </div>
    </div>
}

export default Promo;