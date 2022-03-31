import React from "react";
import "./footer.css";
import Logo from "../../images/logo-footer.png";
import Facebook from "../../images/facebook.png";

const Footer = () => {
  return (
    <>
      <div className='container-fluid footer-bg'>
        <div className='container footer-content'>
          <div className='row pt-4 '>
            <div className='col-4'>
              <div>
                <img src={Logo} className='logo' alt='Logo' />
              </div>
              <div>
                <p>
                  Duis aute irure dolor in reprehndrit in vol velit esse dolore
                  eu fugiat nulla pariatur.
                </p>
              </div>
              <div className='icons-link'>
                <img src={Facebook} alt='fb' />
                <img src={Facebook} alt='fb' />
                <img src={Facebook} alt='fb' />
                <img src={Facebook} alt='fb' />
                <hr />
              </div>
              <div>
                <p>© 2021 ImmerseArch Pvt. Ltd. All rights reserved.</p>
              </div>
            </div>
            <div className='col-4 quick-link'>
              <h4>Quick Links</h4>
              <ol>
                <li>About Company</li>
                <li>Our Work</li>
                <li>Our Services</li>
                <li>News/Blogs</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
              </ol>
            </div>
            <div className='col-4 contact'>
              <div>
                <h4>Contact Info</h4>
              </div>
              <div>
                <p>14/B, Kings Street City Tower, New York USA</p>
              </div>
              <div>
                <h4>Support</h4>
                <p>987-987-930-302</p>
              </div>
              <div>
                <h4>E-mail </h4>
                <p>info@immersearch.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
