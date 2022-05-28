import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Offers from "./Offers";
import Spinner from "../../common/loader/Spinner";
import { url } from "../../url";
const GetCoupon = () => {
  const [coupon, setCoupon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url + "coupon");
      console.log(res);
      setCoupon(res.data.result);
      setIsLoading(false);
    };

    fetch();
  }, []);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="p-4 bg-white shadow-sm">
          <Row>
            <Col md={12}>
              <h4 className="font-weight-bold mt-0 mb-3">Offers</h4>
            </Col>
            {coupon.map((result, i) => (
              <Col md={6} key={result.id}>
                <Offers result={result} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
};
export default GetCoupon;
