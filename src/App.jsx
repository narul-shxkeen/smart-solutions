import React from "react";
import ResponsiveAppBar from "./components/newNav";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
    return <Router>
        <ResponsiveAppBar/>
        <Routes>
            {/* <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
        {/* <Route path="/home" component={Home}/> */}
    </Router>
}

export default App;