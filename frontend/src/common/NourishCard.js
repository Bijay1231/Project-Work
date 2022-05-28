import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Tooltip, Button, message } from "antd";
import PropTypes from "prop-types";
import { Container, Row, Col, Figure } from "react-bootstrap";
import jogging from "./assets/svg/Jogging Colour/jogging.png";
function NourishCard(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={6}>
            <Figure>
              <img alt="img" alt="jogging" className="sub-img" src={jogging} />
            </Figure>
          </Col>
          <Col lg={6}>
            <h3 className="mt-4 mb-3">{props.title}</h3>
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
                                <img alt="img" src={props.img1} height="35px" />
                              <p className="active">{props.subtitle1}</p>
                              </label>
                            </div>
                          </div>
                          <div className="col-3 ">
                            <Tooltip
                              title="text for nourishment"
                              color="yellow"
                            >
                              <Button className="tooltip-button">
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
                              <img alt="img" src={props.img2} />
                            <p className="active">{props.subtitle2}</p>
                           </label>
                            </div>
                          </div>
                          <div className="col-3 ">
                            <Tooltip
                              title="text for nourishment"
                              color="yellow"
                            >
                              <Button className="tooltip-button">
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
                              <img alt="img" src={props.img3} />
                            <p className="active">{props.subtitle3}</p>
                           </label>
                            </div>
                          </div>

                          <div className="col-3 ">
                            <Tooltip
                              title="text for nourishment"
                              color="yellow"
                            >
                              <Button className="tooltip-button">
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
                              <img
                                src={props.img4}
                                alt="img"
                                className="nourish-img"
                                />
                            <p className="active">{props.subtitle4}</p>
                                </label>
                            </div>
                          </div>

                          <div className="col-3 ">
                            <Tooltip
                              title="text for nourishment"
                              color="yellow"
                            >
                              <Button className="tooltip-button">
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
                              <img alt="img" src={props.img5} />
                            <p className="active">{props.subtitle5}</p>
                           </label>
                            </div>
                          </div>

                          <div className="col-3 ">
                            <Tooltip
                              title="text for nourishment"
                              color="yellow"
                            >
                              <Button className="tooltip-button">
                                {" "}
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
                              <img alt="img" src={props.img6} />
                            <p className="active">{props.subtitle6}</p>
                           </label>
                            </div>
                          </div>

                          <div className="col-3  ">
                            <Tooltip title="prompt text" color="yellow">
                              <Button className="tooltip-button">
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
                <FaArrowLeft className="sub-arrow" />
                Back
              </Button>
            </Link>
            <Link to={props.link2}>
              <Button className="sub-btn">
                Next <FaArrowRight className="sub-arrow" />
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

NourishCard.propTypes = {
  step: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icoIcon: PropTypes.string.isRequired,
  img1: PropTypes.string,
  img2: PropTypes.string,
  img3: PropTypes.string,
  img4: PropTypes.string,
  img5: PropTypes.string,
  img6: PropTypes.string,
  subtitle1: PropTypes.string,
  subtitle2: PropTypes.string,
  subtitle3: PropTypes.string,
  subtitle4: PropTypes.string,
  subtitle5: PropTypes.string,
  subtitle6: PropTypes.string,
  link: PropTypes.string,
};

export default NourishCard;
