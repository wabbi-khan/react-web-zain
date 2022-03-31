import React from "react";
import "./newsletter.css";
const NewsLetter = () => {
  return (
    <>
      <div className='container-fluid news-bg'>
        <div className='container content'>
          <div className='row'>
            <div className='col-6'>
              <h4>
                Please feel free <br /> to request a quote
              </h4>
              <p>
                Duis aute irure dolor in reprehenderit in vol velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className='col-6 content2'>
              <div>
                <input
                  type='text'
                  name=''
                  id=''
                  placeholder='Enter your e-mail'
                />
              </div>
              <div>
                <button className='btn btn-primary'>SEND REQUEST</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
