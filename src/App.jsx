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
import OurWork from "./components/ourWork/OurWork";
import Detail from "./components/detail/Detail";
import Project from "./components/project/Project";
import NewsLetter from "./components/newsletter/NewsLetter";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Ads />
      <DiscoverMore />
      <Gallery />
      <OurWork />
      <Detail />
      <Project />
      <NewsLetter />
      <Footer />
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
