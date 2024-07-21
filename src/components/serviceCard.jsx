import React from "react";

function Card(props){
    return <div className="flex flex-col gap-3 md:gap-3 rounded-xl shadow-lg w-[250px] h-[300px] md:w-[400px] md:h-[330px]">
        <img src={props.image} alt={props.alt} className="rounded-t-xl rounded-tr-xl object-cover h-[100px] md:h-[150px] w-full"/>
        <div className="px-3 pt-3">
        <div className="flex gap-2 w-auto items-center">
        <h1 className="poppins-semibold text-sm sm:text-lg text-black" >{props.title}</h1>
        <div
          className="w-[25px] md:w-[40px] h-1"
          style={{
            background:
              "linear-gradient(93.28deg, #00A7E1 23.14%, #FFA630 87.83%)",
          }}
        ></div>
        </div>
    <p className="poppins-regular text-xs sm:text-base">{props.description}</p> 
    </div>
    </div>
}

export default Card;