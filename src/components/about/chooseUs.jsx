import React from "react";

function ChooseUs() {
  return (
    <div className="flex flex-col items-center gap-4 pb-10">
      <div className="flex justify-end items-end w-full relative top-[20px] md:top-[40px] pr-9 z-10">
        <img
          className="h-[50px] w-[60px] sm:h-full sm:w-auto"
          src="images/graphics/Slice 1.png"
          alt="some image with a semicircle under a dotted rectangle"
        />
      </div>
      <div className="flex flex-col gap-1 items-end">
        <h1 className="poppins-semibold text-md sm:text-2xl z-20">
          Why Choose Us?
        </h1>
        <div
          className="w-[90px] md:w-[138px] h-1"
          style={{
            background:
              "linear-gradient(93.28deg, #00A7E1 23.14%, #FFA630 87.83%)",
          }}
        ></div>
      </div>
      <div className="flex w-full justify-around flex-wrap">
        <div className="flex flex-col gap-3 items-center w-[150px] md:w-[250px]">
          <img
            src="images/quality.png"
            alt="image of files stacked on each other, they have vibrant colors"
            className="h-[100px] md:h-[200px] w-auto"
          />
          <h3 className="poppins-semibold text-sm sm:text-lg">
            Unmatched Quality
          </h3>
          <p className="poppins-regular text-xs sm:text-lg text-center md:text-justify">
            Utilizing state-of-the-art Heidelberg machinery for vibrant colors,
            sharp details, and durable finishes.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center w-[150px] md:w-[250px]">
          <img
            src="images/printing.png"
            alt="image of shiny paper going into a large printing machine"
            className="h-[100px] md:h-[200px] w-auto"
          />
          <h3 className="poppins-semibold text-sm sm:text-lg">
          In-House Manufacturing
          </h3>
          <p className="poppins-regular text-xs sm:text-lg text-center md:text-justify">
          As a leading in-house foam manufacturer in India, we use cutting-edge Kolsite machinery to ensure exceptional quality.
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center w-[150px] md:w-[250px]">
          <img
            src="images/handShake.png"
            alt="image of two people cordially shaking hands on signing a quality printing deal"
            className="h-[100px] md:h-[200px] w-auto"
          />
          <h3 className="poppins-semibold text-sm sm:text-lg">
          Client-Centric Approach
          </h3>
          <p className="poppins-regular text-xs sm:text-lg text-center md:text-justify">
          Dedicated to meeting the diverse needs of our clients, offering smart solutions for all their advertising challenges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
