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

function App() {
    return <Router>
        <ResponsiveAppBar/>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer/>
    </Router>
}

export default App;