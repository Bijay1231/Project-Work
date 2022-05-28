import React from "react";
// import { FaFacebookF } from "react-icons/fa";
import "./style.css";
function Footer() {
  return (
    <div>
      <hr className="mx-0 mt-5 px-0" />
      <footer class="footer solid-bg-two">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-widget footer-left-widget">
                <h3 class="widget-title">Address</h3>{" "}
                <div class="textwidget">
                  <p>
                    Shere Punjab, <br /> Jamshedpur
                    <br /> Jharkhand
                  </p>
                </div>
              </div>{" "}
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-widget footer-two-widget">
                <h3 class="widget-title">Book a table</h3>{" "}
                <div class="textwidget">
                  <p>
                    Heydgreen. <br /> Under Om oss kan ni läsa
                    <br />
                    <strong className="text-white">(+91) 620-435-4155</strong>
                  </p>
                </div>
              </div>{" "}
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-widget footer-three-widget">
                <h3 class="widget-title">Opening hours</h3>{" "}
                <div class="textwidget">
                  <p>
                    Monday &#8211; Friday <br /> 10.00 AM &#8211; 11.00 PM
                  </p>
                </div>
              </div>{" "}
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer-widget footer-four-widget">
                <h3 class="widget-title">Instagram feed</h3>{" "}
                <div class="instagram_photo"></div>
              </div>{" "}
            </div>
          </div>
          <div class="footer-bar"> </div>
          <br />
          <div class="row copyright">
            <div class="col-lg-6 col-md-7 align-self-center"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
