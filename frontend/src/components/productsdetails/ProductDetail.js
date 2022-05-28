import React, { useState, useEffect } from "react";
import { Button, Container, ListGroup, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import Spinner from "../../common/loader/Spinner";
import { url } from "../../url";

const ProductDetail = ({ history, match }) => {
  const [result, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(url + `product/${match.params.id}`)
      .then((response) => setProduct(response.data.result));
    setIsLoading(false);
  }, [match]);
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
      <div>
      <Container>
            <div className="back-to-shop">
              <Link className="user-link mt-4" to="/">
                <FaArrowLeft className="shake-slow" /> Go Back
              </Link>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-md-6">
                  <figure className="figure">
                    <img
                      src={url + result.productImage}
                      className="figure-img img-fluid rounded"
                      alt={result.menuName}
                    />
                  </figure>
                </div>
                <div className="col-md-6">
                  <h1 className="pt-1 font-weight-bold">{result.menuName}</h1>
                  <h4 className="card-price">₹ {result.sellPrice}</h4>

                  <span className="mr-1 text-muted">
                    <strong>
                      <s>₹ {result.regularPrice}</s>
                    </strong>
                  </span>

                  <h5 className="pt-1 lead-1 text-muted">
                    {result.description}
                  </h5>
                  <h4>NUTRITIONAL VALUE PER 100 G:</h4>
                  <div className="table-responsive">
                    <table className="table table-sm table-borderless mb-0">
                      <tbody>
                        <tr>
                          <th className="pl-0 w-25" scope="row">
                            <h6>FAT</h6>
                          </th>
                          <div className="nutri-table-guide"></div>
                          <td>{result.fat}g</td>
                        </tr>
                        <tr>
                          <th className="pl-0 w-25" scope="row">
                            <h6>FIBRE</h6>
                          </th>
                          <div className="nutri-table-guide"></div>
                          <td>{result.fibre}g</td>
                        </tr>
                        <tr>
                          <th className="pl-0 w-25" scope="row">
                            <h6>CARBs</h6>
                          </th>
                          <div className="nutri-table-guide"></div>
                          <td>{result.carbohydrates}g</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <hr />
                  <ListGroup.Item>
                    <Row>
                      <Col>Availabilty:</Col>
                      <Col>
                        {result.quantity > 0
                          ? "Available"
                          : "Item not available right now"}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {result.quantity > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col md={6}>
                          <Form.Control
                            as="select"
                            value={qty}
                            className="selectqty"
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(result.quantity).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <Row>
                    <Button
                      onClick={addToCartHandler}
                      size="lg"
                      disabled={result.quantity === 0}
                      variant="outline-secondary"
                      className="btn-block mx-auto"
                      type="button"
                    >
                      Add Meal
                      <FaArrowRight className="pl-2 shake-slow" size={20} />
                    </Button>
                  </Row>
                </div>
              </div>
            </div>
          </Container>
      </div>
      )}
    </>
  );
};
export default ProductDetail;
