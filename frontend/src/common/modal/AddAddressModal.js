import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { url } from "../../url";
function AddAddressModal(props) {
  let history = useHistory();
  const [result, setResult] = useState({
    userId: 0,
    address: "",
    state: "",
    pincode: "",
    phoneNumber: "",
  });
  const handleChange = (event) => {
    setResult({ ...result, [event.target.name]: event.target.value });
  };

  function submit(e) {
    e.preventDefault();
    axios
      .post(url + "Address", result)
      .then((res) => {
        console.log(res);
        history.push("myaccount/address");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <Modal show={props.show} onHide={props.onHide} centered>
        <Modal.Header closeButton={true}>
          <Modal.Title id="add-address">
            <h5 class="mt-1 m-auto">Add Delivery Address</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-row">
              <Form.Group className="col-md-12">
                <input
                  className="input"
                  type="text"
                  name="userId"
                  value={result.userId}
                  onChange={handleChange}
                  hidden
                />
              </Form.Group>
              <Form.Group className="col-md-12">
                <input
                  className="input"
                  type="text"
                  name="address"
                  value={result.address}
                  onChange={handleChange}
                  placeholder="Address Detail"
                />
              </Form.Group>
              <Form.Group className="col-md-12">
                <input
                  className="input"
                  type="text"
                  name="pincode"
                  value={result.pincode}
                  onChange={handleChange}
                  placeholder="Pincode"
                />
              </Form.Group>
              <Form.Group className="col-md-12">
                <input
                  className="input"
                  type="text"
                  name="state"
                  value={result.state}
                  onChange={handleChange}
                  placeholder="State"
                />
              </Form.Group>
              <Form.Group className="col-md-12">
                <input
                  className="input"
                  type="text"
                  name="phoneNumber"
                  value={result.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />
              </Form.Group>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <div className="row">
            <Button
              type="button"
              onClick={props.onHide}
              variant="outline"
              className="d-flex w-50 text-center justify-content-center"
            >
              CANCEL
            </Button>
            <Button
              type="button"
              className="d-flex w-50 text-center justify-content-center cart-btn"
              onClick={(e) => submit(e)}
            >
              SUBMIT
            </Button>
            {/* <ToastContainer /> */}
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default AddAddressModal;
