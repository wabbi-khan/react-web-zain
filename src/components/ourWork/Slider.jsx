import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../images/img1.png";
import Image2 from "../../images/img.png";
import "./ourwork.css";

class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <div className='container-fluid slider'>
        <Slider {...settings}>
          <div>
            <img src={Image1} alt='slider-img' />
            <p>asd</p>
          </div>
          <div>
            <img src={Image2} width={300} alt='slider-img' />
            <p>asd</p>
          </div>
          <div>
            <img src={Image1} width={300} alt='slider-img' />
            <p>asd</p>
          </div>
          <div>
            <img src={Image1} width={300} alt='slider-img' />
            <p>asd</p>
          </div>
          <div>
            <img src={Image1} width={300} alt='slider-img' />
            <p>asd</p>
          </div>
        </Slider>
      </div>
    );
  }
}
export default CenterMode;
