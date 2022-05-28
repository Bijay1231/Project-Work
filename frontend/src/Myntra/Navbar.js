import React, { useState } from "react";
import { FiUser,FiShoppingCart } from "react-icons/fi";
import { Modal, Button, Figure} from "react-bootstrap";
import axios from "axios";
import { url } from "../url";
import firebase from "../firebase/firebase"
import { Link,Redirect } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "react-phone-number-input/style.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Form } from "react-bootstrap";
import ".././App.css";
import logo from "./heydgreen.png";
import { configConsumerProps } from "antd/lib/config-provider";

function NavbarMenu(props) {
  // class NavbarMenu extends Component{
  const [resMsg,setResMsg] = useState('');
  const [login, setLogin] = useState(false);
  const [otp, setOtp] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loginDetail, setLoginDetail] = useState({ mobile: "", password: "" });
  const [signupDetail, setSignupDetail] = useState({ mobile: "", password: "" ,cpassword:""});

  const setUpRecaptcha=()=>{
    console.log('1')
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptch-container', {
      'size': 'invisible',
      'callback': function(response) {
        console.log('2')
        console.log(response);
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        sendOTP();
      }
    });
  } 

  const sendOTP= async()=>{
    console.log("hello")
    setUpRecaptcha()
    console.log("hello2")
    var phoneNumber = '+91'+signupDetail.mobile
    console.log(phoneNumber)
   var appVerifier = window.recaptchaVerifier;   
   console.log(appVerifier)
   await firebase.auth().signInWithPhoneNumber(phoneNumber).then(function (confirmationResult) {
     console.log(confirmationResult);
     window.confirmationResult = confirmationResult;
     var code = window.prompt("Enter otp");
confirmationResult.confirm(code).then(function (result) {
 console.log(result)
 // User signed in successfully.
 var user = result.user;
 console.log('user signed in')
 // ..
}).catch(function (error) {
 // User couldn't sign in (bad verification code?)
 // ...
});
     // SMS sent. Prompt user to type the code from the message, then sign the
     // user in with confirmationResult.confirm(code).
   
   }).catch(function (error) {
     // Error; SMS not sent
     // ...
   });
  }

  const handleOTP=(e)=>{
    setOtp(e.target.value)
  }

  const  submitOTP=()=>{
    console.log(otp)
  }

  const handleLogin = (e) => {
    console.log(loginDetail);
    setLoginDetail({ ...loginDetail, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    setSignupDetail({ ...signupDetail, [e.target.name]: e.target.value });
    console.log(signupDetail);
  };

  const handlelogout=()=>{
    setLogin(false)
    localStorage.clear();
    return <Redirect to={'/'}/> 
    console.log("logged out")
    // localStorage.setItem('login',JSON.stringify(login))
    }

   const submitSignup=(e)=>{
     console.log()
     e.preventDefault();
     axios.post(url+'users/signup',signupDetail)
    .then((res)=>{
      setResMsg(res.data.msg)
      console.log(res)
      if(res.data.success == 1){
        handleClose()
        setLogin(true)
        localStorage.setItem('token',JSON.stringify(res.data.token))
        localStorage.setItem('userDetail',JSON.stringify(res.data.data))
        console.log('logged in')  
        console.log(res.data.data)
        return <Redirect to="/"/>   
      }
      else{
        console.log(res.data.msg)
      } 
    })
    .catch(err => console.log(err))
   }

  const submitHandler=(e)=>{
    e.preventDefault();
    axios.post(url+'users/login',loginDetail)
    .then((res)=>{
      if(res.data.success == 1){
        handleClose()
        setLogin(true)
        localStorage.setItem('token',JSON.stringify(res.data.token))
        localStorage.setItem('userDetail',JSON.stringify(res.data.data))
        console.log('logged in')  
        console.log(res.data.data)  
        return <Redirect to="/"/> 
      }
      else{
        console.log(res.data.msg)
      }
    })
    .catch(err => console.log(err))
    }
  return (
    <div>
      <Navbar
        style={{ zIndex: "999" }}
        collapseOnSelect
        expand="lg"
        bg="light"
        className="shadow bg-white p-1 mb-1 "
      >
        <div className="container-fluid">
          <Navbar.Brand href="/">
            <Figure>
              <img
                src={logo}
                height="100px"
                width="200px"
                margin-top="3rem"
                alt="logo"
              />
            </Figure>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar-toggle"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link className="link mr-2" to={"/"}>
                {/* <AiTwotoneHome color="#FFC91E" siz="15" /> */}
                Home
              </Link>
              <Link className="link mr-2" to={"/subscribe"}>
                {/* <AiTwotoneHome color="#FFC91E" siz="15" /> */}
                Subscribe
              </Link>
              {
                login == true ?
                (<Link to={"/myaccount/"} className="link mr-2">
                Account
              </Link>):<Link to={"/"} className="link mr-2">
                Account
              </Link>
              }
            </Nav>
            <Nav>
              <Link className="link mr-2 pr-3" to={`/cart/`}>
                 <FiShoppingCart color="#FFC91E" siz="15" />
                Cart
              </Link>
              {
                login ? <Link className="link pr-2"to={'/'} onClick={handlelogout}>
                <FiUser color="#FFC91E" siz="15" />
                logout
              </Link> :
              <Link className="link pr-2" onClick={handleShow}>
                <FiUser color="#FFC91E" siz="15" />
                login
              </Link>
             }
              <Modal
                // style={{zIndex:"9999",width:"unset !important",maxWidth:"unset !important"}}
                dialogClassName="my-modal phoneModal"
                aria-labelledby="example-custom-modal-styling-title"
                show={show}
                onHide={handleClose}
              >
                <Modal.Body>
                  <Tabs>
                    <TabList className="row">
                      <Tab className="col tab">Login</Tab>
                      <Tab className="col tab">Sign Up</Tab>
                    <div>{resMsg}</div>
                    </TabList>
                    <hr />
                    <TabPanel>
                      <form onSubmit={submitHandler}>
                        <div className="form-row">
                          <div className="col-md-12 mb">
                            <input
                              className="input "
                              national
                              countryCallingCodeEditable={false}
                              defaultCountry="IN"
                              name="mobile"
                              value={loginDetail.mobile}
                              onChange={handleLogin}
                              placeholder="Enter your number"
                              minLength={10}
                              maxLength={10}
                            />
                          </div>
                          <div className="col-md-12 mb">
                            <input
                            className="input"
                            type="password"
                              name="password"
                              value={loginDetail.password}
                              onChange={handleLogin}
                              placeholder="Password"
                              minLength={4}
                              maxLength={4}
                            />
                          </div>
                          
                          <div className="col-md-12 align-btn ">
                            <Button
                              type="submit"
                              className=" btn-sm btn-block "
                            >
                              Login
                            </Button>
                          </div>
                        </div>
                      </form>
                    </TabPanel>
                    <TabPanel>
                      <form onSubmit={submitSignup}>
                        <div className="form-row">
                          <div className="col-md-12 mb">
                            <input
                              className="input phnInput"
                              national
                              countryCallingCodeEditable={true}
                              defaultCountry="IN"
                              name="mobile"
                              value={signupDetail.mobile}
                              onChange={handleSignup}
                              placeholder="Enter your number"
                              aria-describedby="otpButton"
                              minLength={10}
                              maxLength={10}
                              />
                              {/* <Button onClick={sendOTP} id="otpButton">Send OTP</Button> */}
                            </div>
                           {/*<div className="col-md-12">
                            <input
                              className="input"
                              type="text"
                              name="otp"
                              value={otp}
                              onChange={handleOTP}
                              placeholder="OTP"
                            />
                            <Button onClick={submitOTP} id="otpButton">submit</Button>
                          </div> */}
                          <div className="col-md-12">
                            <input
                              className="input"
                              type="password"
                              name="password"
                              value={signupDetail.password}
                              onChange={handleSignup}
                              placeholder="Password"
                              minLength={4}
                              maxLength={4}
                            />
                          </div>
                          <div className="col-md-12">
                            <input
                              className="input"
                              type="password"
                              name="cpassword"
                              value={signupDetail.cpassword}
                              onChange={handleSignup}
                              placeholder="Confirm Password"
                              minLength={4}
                              maxLength={4}
                            />
                          </div>
                          <Form.Group className="col-md-12 align-btn">
                            <Button
                              type="submit"
                              className=" btn-sm btn-block "
                            >
                              Sign Up
                            </Button>
                          </Form.Group>
                        </div>
                      </form>
                    </TabPanel>
                  </Tabs>
                </Modal.Body>
              </Modal>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;
