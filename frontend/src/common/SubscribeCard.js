import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button, message } from "antd";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import getstarted from "./assets/getstarted.svg";
function SubscribeCard(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={6}>
            <img
              alt="img"
              src={getstarted}
              class="attachment-large size-large"
              alt="img"
              className="sub-img"
              loading="lazy"
            />
          </Col>
          <Col lg={6} className="mt-4">
            <h3>{props.title}</h3>

            <Col md={10}>
              <form>
                <div className="meal-days">
                  <ul>
                    <div className="goal-items">
                   
                      <li>
                        <div>
                        <label>
                          <img alt="img" src={props.img1} />
                          <p className="active">{props.subtitle1}</p>
                      </label>
                        </div>
                      </li>
                      <li>
                        <div>
                          <label>
                          <img alt="img" src={props.img2} />
                          <p className="active">{props.subtitle2}</p>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div>
                        <label>
                          <img alt="img" src={props.img3} />
                          <p className="active">{props.subtitle3}</p>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div>
                        <label>
                          <img alt="img" src={props.img4} />
                          <p className="active">{props.subtitle4}</p>
                          </label>
                        </div>
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
            <Link to={props.link2}>
              <Button className="sub-btn">
                Next <FaArrowRight className="sub-arrow" t />
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

SubscribeCard.propTypes = {
  step: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icoIcon: PropTypes.string.isRequired,
  img1: PropTypes.string,
  img2: PropTypes.string,
  img3: PropTypes.string,
  img4: PropTypes.string,
  subtitle1: PropTypes.string,
  subtitle2: PropTypes.string,
  subtitle3: PropTypes.string,
  subtitle4: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
};

export default SubscribeCard;
