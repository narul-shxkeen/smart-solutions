import React from "react";

function Clients(){
    return <div>
 <div className="flex justify-end items-end w-full relative top-[20px] md:top-[40px] pr-9 z-10">
        <img
          className="h-[20px] w-[20px] sm:h-full sm:w-auto relative bottom-4 md:bottom-0"
          src="images/graphics/boxes.png"
          alt="some image with a semicircle under a dotted rectangle"
        />
      </div>
      <div className="flex flex-col gap-1 justify-center items-center md:w-auto">
        <h1 className="poppins-semibold text-md sm:text-2xl z-20 text-center">
        Designed Custom Prints For The Leading Brands
        </h1>
        <div
          className="w-[130px] md:w-[175px] h-1 relative left-0 md:left-[190px]"
          style={{
            background:
              "linear-gradient(93.28deg, #00A7E1 23.14%, #FFA630 87.83%)",
          }}
        ></div>
      </div>
      <img src="images/graphics/wave.png" alt="a graphic with a wave" className="mt-4 md:mt-0 w-[70px] h-[15px] md:w-[125px] md:h-[30px] relative  left-2 md:left-7"/>
    <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center items-center w-full my-10 md:my-20 ">
    <img src="images/b8.png" className="w-1/2 md:w-[180px] h-auto object-cover"/>
        <img src="images/b3.png" className="w-1/2 md:w-[180px] h-auto object-cover"/>
        <img src="images/b6.png" className="w-1/2 md:w-[180px] h-auto object-cover"/>
        <img src="images/b5.png" className="w-1/2 md:w-[180px] h-auto object-cover"/>
        <img src="images/b1.png" className="w-1/2 md:w-[180px] h-auto object-cover"/>
        <img src="images/b2.png" className="w-1/2 md:w-[180px] h-auto object-cover"/>
        <img src="images/b4.png" className="w-1/2 md:w-[180px] h-auto object-cover"/>
        <img src="images/b7.png" className="w-1/2 md:w-[180px] h-auto object-cover"/>
        <img src="images/b9.png" className="w-1/2 md:w-[180px] h-auto object-cover"/>
        <img src="images/b10.png" className="w-1/2 md:w-[180px] h-auto object-cover"/>
    </div>
    </div>

}

export default Clients;