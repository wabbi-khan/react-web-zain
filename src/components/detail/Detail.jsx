import React from "react";
import "./detail.css";
import Image1 from "../../images/002-idea.png";
import Image2 from "../../images/003-planning.png";
import Image3 from "../../images/001-graphic-design.png";
import Image4 from "../../images/004-blocks.png";
import Image5 from "../../images/circle-img.png";
const Detail = () => {
  return (
    <div className='container-fuild bg-liner'>
      {/* <div className='set-text'> */}
      <div className='first-row'>
        <div className='row py-4 '>
          <div className='col-12'>
            <h1>Few Steps to Perfection</h1>
          </div>
        </div>

        <div className='row pb-4'>
          <div className='col-12'>
            <p>
              Lorem ipsum dolor sit amet, consecteur adip elit, sed do idnt ut
              labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div className='container pt-4'>
        <div className='sec-row'>
          <div className='row'>
            <div className='col-3'>
              <e>description</e>
              <img src={Image1} alt='img' /> <br />
              <b className='pt-4'>Brief</b>
            </div>
            <div className='col-3'>
              <e>concept</e>
              <img src={Image2} alt='img' /> <br />
              <b className='pt-4'>Planning</b>
            </div>
            <div className='col-3'>
              <e>Designing</e>
              <img src={Image3} alt='img' /> <br />
              <b className='pt-4'>Visuals</b>
            </div>
            <div className='col-3'>
              <e>Building</e>
              <img src={Image4} alt='img' /> <br />
              <b className='pt-4'>Render</b>
            </div>
          </div>
        </div>

        <div className='third-row'>
          <div className='row'>
            <div className='col-6 '>
              <h1>
                Let's make <br /> every detail perfect
              </h1>
              <div className='para'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <button className='btn btn-primary'>LET'S DISCUSS</button>
            </div>
            <div className='col-6'>
              <div className='image'>
                <img src={Image5} alt='circle-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
