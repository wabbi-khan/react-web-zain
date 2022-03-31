import React from "react";
import "./gallery.css";
import Galleryy from "../../images/gallery.png";
import Galleryy2 from "../../images/gallery-2.png";
const Gallery = () => {
  return (
    <>
      <div class='container-fluid gallery'>
        <div className='row '>
          <div className='col-12 d-flex p-0'>
            <div>
              <img src={Galleryy2} className='gallery-img' alt='gallery' />
            </div>
            <div>
              <img src={Galleryy} className='gallery-img' alt='gallery' />
            </div>
            <div>
              <img src={Galleryy2} className='gallery-img' alt='gallery' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
