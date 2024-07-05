import React from "react";

function Card(props){
    return <div className="flex flex-col gap-1 md:gap-3 rounded-xl shadow-md w-[140px] h-[15px] md:w-[260px] md:h-[230px] px-3 pt-3">
        <h1 className="poppins-semibold text-sm sm:text-lg text-[#00A7E1]" >{props.title}</h1>
    <p className="poppins-regular text-xs sm:text-base">{props.description}</p> 
    </div>
}

export default Card;