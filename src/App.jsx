import React from "react";
import ResponsiveAppBar from "./components/newNav";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Landing from "./components/landing/landing";

function App() {
    return <Router>
        <ResponsiveAppBar/>
        <Routes>
            <Route path="/" element={<Landing />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
    </Router>
}

export default App;