import React from "react";

function Landing() {
  return (
    <div className="flex flex-col items-center gap-4 pb-10 bg-[#F7F0F0]">
      <div className="flex justify-end items-end w-full relative top-[20px] md:top-[40px] pr-9 z-10">
        <img
          className="h-[30px] w-[30px] sm:h-full sm:w-auto"
          src="images/graphics/boxes.png"
          alt="some image with a semicircle under a dotted rectangle"
        />
      </div>
      <div className="flex flex-col gap-1 w-[300px] md:w-auto">
        <h1 className="poppins-semibold text-md sm:text-2xl z-20 text-center">
        Providing High Quality Offset Printing Services For Brands Since 1996
        </h1>
        <div
          className="w-[150px] md:w-[230px] h-1 relative left-[117px] md:left-[120px] bottom-[45px] md:bottom-0"
          style={{
            background:
              "linear-gradient(93.28deg, #00A7E1 23.14%, #FFA630 87.83%)",
          }}
        ></div>
      </div>
      <p className="poppins-regular text-xs sm:text-base text-justify md:text-center w-[300px] md:w-auto px-10 md:py-10">We offer a comprehensive range of printing services, leveraging state-of-the-art Heidelberg machinery for vibrant colors, sharp details, and durable finishes. Our advanced technology and in-house production capabilities enable us to handle large volumes and complex projects with ease. Committed to innovation, customization, and competitive pricing, we ensure every project meets the highest standards of quality and precision.</p>
    </div>
  );
}

export default Landing;
