import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import AddAddressModal from "../../common/modal/AddAddressModal";
import AddressCard from "../../common/AddressCard";
import { url } from "../../url";
import Spinner from "../../common/loader/Spinner";
const GetAddress = (result) => {
  const [address, setAddress] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url+"Address");
      setAddress(res.data.result);
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
            <h4 className="font-weight-bold mt-0 mb-3">Manage Addresses</h4>
          </Col>
          {address.map((result) => (
            <Col md={6} key={result.id}>
              <AddressCard result={result} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col>
            <button
              className="btn address-btn"
              onClick={() => setModalShow(true)}
            >
              Add Address
            </button>
            <AddAddressModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
        </Row>
      </div>)}
    </>
  );
};
export default GetAddress;
