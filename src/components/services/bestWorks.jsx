import react from "react";

function BestWorks() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex w-full relative top-[20px] md:top-[40px] pr-9 z-10">
        <img
          className="h-[40px] w-[40px] sm:h-full sm:w-auto"
          src="images/graphics/polygons.png"
          alt="some image with a triangle and a dotted rectangle placed side by side"
        />
      </div>
      <div className="flex flex-col gap-1 md:w-auto justify-center items-center">
        <h1 className="poppins-semibold text-md sm:text-2xl z-20 text-center">
          Some Of Our Best Works
        </h1>
        <div
          className="w-[85px] md:w-[130px] h-1 relative left-[52px] md:left-[80px]"
          style={{
            background:
              "linear-gradient(93.28deg, #00A7E1 23.14%, #FFA630 87.83%)",
          }}
        ></div>
      </div>
      <div className="grid items-center justify-items-center grid-cols-2 gap-6 md:gap-20">
        <img src="images/minions.png" className="w-2/3 md:w-full h-auto object-cover"/>
        <img src="images/W2.png" className="w-2/3 md:w-full h-auto object-cover"/>
        <img src="images/w3.png" className="w-2/3 md:w-full h-auto object-cover"/>
        <img src="images/behind_layer.png" className="w-2/3 md:w-full h-auto object-cover"/>
        <img src="images/w4.png" className="w-2/3 md:w-full h-auto object-cover"/>
        <img src="images/w5.png" className="w-2/3 md:w-full h-auto object-cover"/>
        <img src="images/w6.png" className="w-2/3 md:w-full h-auto object-cover"/>
        <img src="images/w7.png" className="w-2/3 md:w-full h-auto object-cover"/>
        <img src="images/w8.png" className="w-2/3 md:w-full h-auto object-cover"/>
        <img src="images/w9.png" className="w-2/3 md:w-full h-auto object-cover"/>
      </div>
    </div>
  );
}

export default BestWorks;
