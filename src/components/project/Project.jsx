import React from "react";
import "./project.css";
import Image1 from "../../images/sale1.png";
import Image2 from "../../images/sale2.png";
import Image3 from "../../images/sale3.png";
const Project = () => {
  return (
    <>
      <div className='container'>
        <div className='sale'>
          <div className='row'>
            <div className='col-12 heading'>
              <h2>Projects for Sale</h2>
              <p style={{ width: "500px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className=' plan'>
          <div className='row'>
            <div className='col-12'>
              <h3>
                Floor Plan Area <br /> with Venyl Pavement
              </h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='images'>
          <div className='row'>
            <div className='col-6'>
              <img src={Image1} className='image1' alt='sale' />
            </div>
            <div className='col-6'>
              <div>
                <img src={Image2} alt='sale' />
              </div>
              <div>
                <img src={Image3} alt='sale' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
