import React from "react";
// import subscribebanner from "../../common/assets/subscribebanner.jpg";
import { Link } from "react-router-dom";
import Carousel from "../../Myntra/Carousel";
import dgreenicon from "../../common/assets/dgreenicon.png";
import dgreenicon2 from "../../common/assets/dgreenicon2.png";
import dgreenicon3 from "../../common/assets/dgreenicon3.png";
import { FiArrowRightCircle } from "react-icons/fi";
import { Button } from "react-bootstrap";
import Faqs from "../faqs/Faqs";
function Subscribe() {
  return (
    <div>
      <Carousel />

      <section className="main">
        <div className="subscribe-img"></div>
        <div className="subscribe-section ">
          <div className="container text-center">
            <h2 className="mb-2 font-weight-bold p-5">Why Heydgreen?</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="text-center">
                  <div className="mt-2 ">
                    {" "}
                    <img classNameName="dgreenicon" alt="img" src={dgreenicon} />
                  </div>
                  <h5 className="mt-3">Hygenic Food</h5>{" "}
                  <small>Good Food makes the person healthy and wealthy.</small>
                </div>
              </div>
              <div className="col-md-4 sub-icon">
                <div className="text-center">
                  <div className="mt-2 ">
                    {" "}
                    <img classNameName="dgreenicon" alt="img" src={dgreenicon2} />
                  </div>
                  <h5 className="mt-3">Delivery Accurrate</h5>{" "}
                  <small>Delivery will always be on time.</small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div className="mt-2 ">
                    {" "}
                    <img classNameName="dgreenicon" alt="img" src={dgreenicon3} />
                  </div>
                  <h5 className="mt-3">Healthy Meal</h5>{" "}
                  <small>
                    Based on your diet plan we will provide you the best quality
                    food.
                  </small>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-5 mb-3">
              {" "}
              <Link to={"/getstarted"}>
                <Button variant="outline-success">
                  {" "}
                  Get Started <FiArrowRightCircle />
                </Button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
}

export default Subscribe;
