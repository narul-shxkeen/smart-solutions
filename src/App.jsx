import React from "react";
import "./App.css";
import ResponsiveAppBar from "./components/newNav";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Landing from "./components/landing/landing";
import Footer from "./components/footer";
import About from "./components/about/about";
import Services from "./components/services/servicesLanding";
import Clients from "./components/clients";
import Contacts from "./components/contact";
import Offset from "./components/services/offset";
import FoamBanner from "./components/services/foamBanners";
import Danglers from "./components/services/danglers"
import Stepney from "./components/services/stepney";
import UV from "./components/services/uv";

function App() {
    return <Router>
        <ResponsiveAppBar/>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />}/>
            <Route path="/services/offsetprinting" element={<Offset/>}/>
            <Route path="/services/foambanners" element={<FoamBanner/>}/>
            <Route path="/services/danglers" element={<Danglers/>}/>
            <Route path="/services/stepney" element={<Stepney/>}/>
            <Route path="/services/uv" element={<UV/>}/>
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Footer/>
    </Router>
}

export default App;