import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Tooltip, Button, message } from "antd";
import PropTypes from "prop-types";
import { Container, Row, Col, Figure } from "react-bootstrap";
import food from "./assets/food.svg";
function FoodtypeCard(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={6}>
            <Figure>
              {/* <img src="img/diet1.png" width="585" height="494" /> */}
              <img alt="food" className="sub-img" src={food} />
            </Figure>
          </Col>
          <Col lg={6} className="mt-4">
            <h3 className="mt-4 mb-2">{props.title}</h3>
            <div className="step-img">
              {/* <img src={props.step} alt="goals" /> */}
            </div>
            <Col md={10}>
              <form>
                <div className="meal-days">
                  <ul>
                    <div className="goal-items">
                      <li>
                        <Row>
                          <div className="col-9">
                            <div>
                              <label>
                                {/* <input type="text" value="" /> */}
                                <img src={props.img1} />
                                <p className="active">{props.subtitle1}</p>
                              </label>
                            </div>
                          </div>
                          <div className="col-3">
                            <Tooltip title="prompt text" color="yellow">
                              <Button>
                                <i>i</i>
                              </Button>
                            </Tooltip>
                          </div>
                        </Row>
                      </li>
                      <li>
                        {" "}
                        <Row>
                          <div className="col-9">
                            <div>
                              <label>
                                {/* <input type="text" value="" /> */}
                                <img src={props.img2} />
                                <p className="active">{props.subtitle2}</p>
                              </label>
                            </div>
                          </div>
                          <div className="col-3">
                            <Tooltip title="prompt text" color="yellow">
                              <Button>
                                <i>i</i>
                              </Button>
                            </Tooltip>
                          </div>
                        </Row>
                      </li>
                      <li>
                        <Row>
                          <div className="col-9">
                            <div>
                              <label>
                                <img src={props.img3} />
                                <p className="active">{props.subtitle3}</p>
                              </label>
                            </div>
                          </div>
                          <div className="col-3">
                            <Tooltip title="prompt text" color="yellow">
                              <Button>
                                <i>i</i>
                              </Button>
                            </Tooltip>
                          </div>
                        </Row>
                      </li>
                    </div>
                  </ul>
                </div>
              </form>
            </Col>
            <Link to={props.link1}>
              <Button className="mr-3 sub-btn">
                {" "}
                <FaArrowLeft className="sub-arrow" />
                Back
              </Button>
            </Link>
            {/* <Link to={props.link2}> */}
            <Link to={'/'}>
              <Button className="sub-btn" type="submit" >
                Submit
                <FaArrowRight className="sub-arrow" />
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

FoodtypeCard.propTypes = {
  step: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icoIcon: PropTypes.string.isRequired,
  img1: PropTypes.string,
  img2: PropTypes.string,
  img3: PropTypes.string,
  subtitle1: PropTypes.string,
  subtitle2: PropTypes.string,
  subtitle3: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
};

export default FoodtypeCard;
