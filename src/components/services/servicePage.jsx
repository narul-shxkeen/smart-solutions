import React, { useState } from "react";

function ServiceCard(props) {
  return (
    // bg-[#F7F0F0]
    <div className="flex flex-col md:flex-row bg-[#F7F0F0] justify-center gap-10 w-full py-10 sm:py-20">
      <div className="flex flex-col gap-6 justify-start items-start md:gap-10 w-full md:h-[70vh] md:w-2/5">
        <div className="flex items-center justify-start gap-2">
          <h1 className="text-xl md:text-3xl poppins-bold">{props.title}</h1>
          <div
            className="w-[25px] md:w-[40px] h-1"
            style={{
              background:
                "linear-gradient(93.28deg, #00A7E1 23.14%, #FFA630 87.83%)",
            }}
          ></div>
        </div>
        <p className="text-sm md:text-lg poppins-regular w-full">
          {props.description}
        </p>
      </div>
      {/* <div className="w-full flex justify-center md:w-2/5"> */}
      <img
        src={props.image}
        className="w-[70vh] md:w-1/2 md:h-[70vh] object-cover rounded-xl shadow-xl"
      />
      {/* </div> */}
    </div>
  );
}

export default ServiceCard;
