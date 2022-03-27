import React from "react";
import "./hero.css";
import Facebook from "../../images/facebook.png";
const Hero = () => {
  return (
    <>
      <div className='container hero'>
        <div className='row'>
          <div className='col-10'>
            <div>
              <span>Our experience is your success,</span>
            </div>
            <div className='pp'>
              <h1 className='ppp'>
                Architecture <br /> Design Agency.
              </h1>
            </div>
            <div className='d-flex'>
              <hr className='mx-4' />
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
