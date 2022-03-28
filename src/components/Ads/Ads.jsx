import React from "react";
import "./ads.css";
import Client1 from "../../images/client-1.png";
import Client2 from "../../images/client-2.png";
import Client3 from "../../images/client-3.png";
import Client4 from "../../images/client-4.png";
import Client5 from "../../images/client-5.png";
const Ads = () => {
  return (
    <>
      <div className='container-fluid services d-flex'>
        <div className='ads'>
          <img src={Client1} alt='ads' />
        </div>
        <div className='ads'>
          <img src={Client2} alt='ads' />
        </div>
        <div className='ads'>
          <img src={Client3} alt='ads' />
        </div>
        <div className='ads'>
          <img src={Client4} alt='ads' />
        </div>
        <div className='ads'>
          <img src={Client5} alt='ads' />
        </div>
      </div>
    </>
  );
};

export default Ads;
