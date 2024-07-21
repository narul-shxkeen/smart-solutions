import React from "react";
import Card from "../serviceCard";

function ServicesOffered() {
  return (
    <div className="flex flex-col items-center gap-4 pb-10 bg-[#F7F0F0]">
      <div className="flex w-full relative top-[20px] md:top-[40px] pr-9 z-10">
        <img
          className="h-[40px] w-[40px] sm:h-full sm:w-auto"
          src="images/graphics/triangles.png"
          alt="some image with a semicircle under a dotted rectangle"
        />
      </div>
      <div className="flex flex-col gap-1 w-[300px] md:w-auto">
        <h1 className="poppins-semibold text-md sm:text-2xl z-20 text-center">
          Services We Offer
        </h1>
        <div
          className="w-[70px] md:w-[100px] h-1 relative left-[82px] md:left-0"
          style={{
            background:
              "linear-gradient(93.28deg, #00A7E1 23.14%, #FFA630 87.83%)",
          }}
        ></div>
      </div>
      {/* flex flex-wrap gap-10 md:gap-20 justify-center */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
        <Card image="images/landingImage2.jpeg" alt="image of an offset printing machine" title="Offset Printing" description="High-speed, multicolor prints up to 28' x 40' with precision and vibrant details, achieving up to 15,000 impressions per hour."/>
     <Card image="images/foamBanner.png" alt="image of shiny paper going into a large printing machine" title="Foam Banners" description="Durable, visually appealing banners designed to make a significant impact with striking visuals and long-lasting quality."/>
     <Card image="images/danglers.png" alt="image of a colorful and cheap dangler for premium detergent bar" title="Danglers Printing" description="Eye-catching hanging advertisements that effectively promote your products and capture attention with high-quality prints."/>
      <Card image="images/UV.png" alt="image of 4 colorful glass bottles standing upright" title="UV Printing" description="Specialized printing services providing unique and striking visual effects that set your materials apart with vivid colors and UV finishes."/>
      <Card image="images/stepney.png" alt="image of a car's stepney with a dish washing add printing on it" title="Stepney Printing" description="Precision-printed materials crafted to meet your unique advertising needs, ensuring exceptional quality and customization."/>
      </div>
    </div>
  );
}

export default ServicesOffered;
