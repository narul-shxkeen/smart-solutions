import React from "react";
import Landing from "./landing";
import VideoSection from "../landing/video";
import ServicesOffered from "./serviceOffered";
import BestWorks from "./bestWorks";
import Promo from "../landing/promo";
import Offset from "./offset";

function Services(){
    return<>
    <Landing/>
    <VideoSection/>
    <ServicesOffered/>
    <BestWorks/>
    <Promo/>
    </>
}

export default Services;