import React from "react";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarMenu from "./Myntra/Navbar";
import PostData from "./axios/PostData";
import ProductDetail from "./components/productsdetails/ProductDetail";
import Cart from "./components/cart/Cart";
import Login from "./components/login/Login";
import UserAcount from "./components/myaccount/UserAcount";
import EditAddressModal from "./common/modal/EditAddressModal";
import Subscribe from "./components/subscribe/Subscribe";
import NotFound from "./common/NotFound";
import NourishPref from "./components/subscribe/NourishPref";
import GetStarted from "./components/subscribe/GetStarted";
import Foodtype from "./components/subscribe/Foodtype";
import Final from "./components/signup/Final";
import Footer from "./common/Footer";
import Protected from "./components/protected"
import { BackTop } from "antd";
import "./App.css";
function App() {
  return (
    <Router>
      <NavbarMenu />
      <Switch>
        <Route path="/" component={PostData} exact />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/cart/:id?" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/subscribe" component={Subscribe} />
        <Route path="/getstarted" component={GetStarted} />
        <Route path="/nourish" component={NourishPref} />
        <Route path="/foodtype" component={Foodtype} />
              <Route path="/myaccount">
          <Protected Cmp={UserAcount} />
            </Route> 
        {/* <Route path="/myaccount" component={UserAcount} /> */}
        <Route path="/signup" component={Final} />
        <Route
          path="/update/:id"
          render={(props) => <EditAddressModal {...props} />}
        />
        <BackTop className="site-back-top-basic" />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
