import React from "react";
import "./hero.css";
import Facebook from "../../images/facebook.png";
import Line from "../../images/line.png";
const Hero = () => {
  return (
    <>
      <div className='container hero'>
        <div className='row'>
          <div className='col-10'>
            <div
              style={{
                fontSize: "20px",
                marginTop: "10px",
                margin: "0",
                paddingBottom: "20px",
              }}
            >
              <span>Our experience is your success,</span>
            </div>
            <div className='pp'>
              <h1 className='ppp'>
                Architecture <br /> Design Agency.
              </h1>
            </div>
            <div className='d-flex line2'>
              {/* <hr className='mx-4' /> */}
              <img src={Line} className='line' alt='line' />
              <span> innovate . create . design</span>
            </div>
            <div className='d-flex '>
              <div className='px-4 mt-2 group'>Our Work</div>
              <div className='btn'>Request Quote</div>
            </div>
          </div>
          <div className='col-2 social-icons'>
            <div>
              <img src={Facebook} className='py-4' alt='social-icons' />
            </div>
            <div>
              <img src={Facebook} className='py-4' alt='social-icons' />
            </div>
            <div>
              <img src={Facebook} className='py-4' alt='social-icons' />
            </div>
            <div>
              <img src={Facebook} className='py-4' alt='social-icons' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
