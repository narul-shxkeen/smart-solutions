import React from "react";
import Home from "./home";
import ServicesMini from "./services_offered";
import OrangeSection from "./orangeSection";

function Landing() {  
    return (
        <div>
            <Home/>
            <ServicesMini/>
            <OrangeSection/>
        </div>
    );
}

export default Landing;