import React, { Component } from 'react'
import Axios from 'axios'
import {url} from "../../url"
import Cart from "../cart/Cart"

// export class Payments extends Component {
  // constructor(props) {
    //   super(props)
    
    //   this.state = {
      
      //   }
      //  // this.razorPayHandler = this.razorPayHandler(this);
      // }
      
      const razorPayPaymentHandler= async()=>{
        // async razorPayPaymentHandler(){
          console.log('hey')
    const API_URL = `${url}razorpay/`
    const orderUrl = `${API_URL}order`;
    const response = await Axios.get(orderUrl);
    const { data } = response;
    console.log("App -> razorPayPaymentHandler -> data", data)
    
    const options = {
      key: 'rzp_test_CpGa9nXg1h0AC7',
      name: "heygreen",
      description: "payemnt to heydgreen",
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          const url = `${API_URL}capture/${paymentId}`;
          const captureResponse = await Axios.post(url, {})
          const successObj = JSON.parse(captureResponse.data)
          const captured = successObj.captured;
          console.log("App -> razorPayPaymentHandler -> captured", successObj)
          if(captured){
            console.log('success')
          }
          
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#1fff1f",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }
  export function Payments(){
  // render() {
    const razor="hello"
    const props={razor}
    return (
      <div>
        <Cart {...props}/>
        {/* <button 
        onClick={razorPayPaymentHandler}
        className="btn btn-primary">
          Pay Now
        </button> */}
      </div>
    )
  }
// }

export default Payments