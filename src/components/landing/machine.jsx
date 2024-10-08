import React from "react";

function Machine() {
    return <div className="flex flex-col bg-[#37393A] items-center gap-10 pt-8">
        <h1 className="poppins-semibold text-md sm:text-4xl text-white w-2/3 md:w-[700px] text-center">
        Home to <span className="gradient-text">India’s Largest Offset Printing Machine</span>!
        </h1>
        <p className="text-white poppins-regular text-xs sm:text-lg text-justify w-4/5 md:w-[900px]">We are thrilled to announce that Smart Solutions Print N Pack is home to India’s biggest offset printing machine: a <span className="poppins-bold">6-color 44" x 64"</span>. As one of the few companies in India to possess such advanced technology, we are poised to revolutionize the printing and advertising industry. Stay tuned for more updates and be part of this exciting journey with us!</p>
    <img className="w-full h-auto" src="images/machine.png" alt="image of an offset printing machine"/>
    </div>
}

export default Machine;