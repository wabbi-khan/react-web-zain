import React from "react";
import "./discover.css";
import Discover from "../../images/discover.png";
const DiscoverMore = () => {
  return (
    <>
      <div className='container discover'>
        <div className='row'>
          <div className='col-5'>
            <h1 className=' text-1 py-4'>
              Creating Trends & <br /> Bringing them to
              <w style={{ color: "#FF6357" }}> Reality</w>
            </h1>
            <p className='pb-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nost rud exercitation lamco laboris nisi ut
              aliquip modo conseqat.
            </p>
            <button className='btn btn-primary btn-discover mt-4'>
              Discover More +
            </button>
          </div>

          <div className='col-2 '>
            <img src={Discover} className='bg-img' alt='Discover' />
          </div>
          <div className='col-5'>
            <p className='mt-4 text-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nost rud exercitation lamco laboris nisi ut
              aliquip modo conseqat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverMore;
