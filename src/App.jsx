import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Routes, Route } from "react-router-dom";
// import About from "./pages/About";
// import OurWork from "./pages/OurWork";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
import Ads from "./components/Ads/Ads";
import DiscoverMore from "./components/discover/DiscoverMore";
import Gallery from "./components/gallery/Gallery";
const App = () => {
  return (
    <>
      <Navbar />
      <Ads />
      <DiscoverMore />
      <Gallery />
      {/* <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/ourWork' element={<OurWork />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> */}
    </>
  );
};

export default App;
