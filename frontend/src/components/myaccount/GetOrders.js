import React, { useState, useEffect } from "react";
import axios from "axios";
import {  Col } from "react-bootstrap";
import Order from "./Order";
import { url } from "../../url";
import Spinner from "../../common/loader/Spinner";

const GetOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState('');

  useEffect(() => {
    const auth=JSON.parse(localStorage.getItem('token'));
    const fetch = async () => {
      const res = await axios.get(url + "order",{
        headers: {
          'token':auth
        }
      });
      console.log(res);
      setOrders(res.data.result);
      setIsLoading(false);
    };
    fetch();
  }, []);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="p-4 bg-order shadow-sm">
          <h4 className="font-weight-bold mt-0 mb-4">Past Orders</h4>
          {orders.map((result, i) => (
            <Col md={12} key={result.id}>
              <Order result={result} />
            </Col>
          ))}
        </div>
      )}
    </>
  );
};
export default GetOrders;
