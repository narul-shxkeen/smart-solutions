import React from "react";
import Home from "./home";
import ServicesMini from "./services_offered";
import OrangeSection from "./orangeSection";
import VideoSection from "./video";
import Brands from "./brands";
import Machine from "./machine";
import Promo from "./promo"
import About from "./about";

function Landing() {  
    return (
        <div className="w-full">
            <Home/>
            <About/>
            <Machine/>
            <ServicesMini/>
            <OrangeSection/>
            <VideoSection/>
            <Brands/>
           
            <Promo/>
        </div>
    );
}

export default Landing;