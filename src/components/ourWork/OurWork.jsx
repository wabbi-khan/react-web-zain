import React from "react";
import "./ourwork.css";
import Arrow1 from "../../images/arrow1.png";
import Arrow2 from "../../images/arrow2.png";
import Slider from "./Slider";
const OurWork = () => {
  return (
    <>
      <div className='container-fluid background'>
        <div className='container'>
          <div className='row content'>
            <div
              className='col-5 '
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 className='px-4'>Our Work</h1>
              <w className='plus'>+</w>
              <w className='view'>View More</w>
            </div>
            <div className='col-5  arrow'>
              <img src={Arrow1} alt='arrow' />
              <img src={Arrow2} alt='arrow' />
            </div>
          </div>
          <div className='row'>
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWork;
