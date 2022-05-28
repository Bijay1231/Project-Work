import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { FaSortDown } from "react-icons/fa";
import Spinner from "../common/loader/Spinner";
import { RiEqualizerLine } from "react-icons/ri";
import axios from "axios";
import { url } from "../url";
import { Row, Col, Container } from "react-bootstrap";
import Carousel from "../Myntra/Carousel";
import Product from "./Product";

const PostData = () => {
  const [product, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCat, setSubcat] = useState([]);
  const [Type, setType] = useState("0");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios
        .all([axios.get(url+ "product"), axios.get(url + "category")])
        .then(
          axios.spread((product, category) => {
            setProducts(product.data.result);
            setCategory(category.data.result);
            setIsLoading(false);
          })
        );
    };

    fetch();
  }, []);
  const SubCat = (id) => {
    axios
      .get(url + `category/getsub/${id}`)
      .then((res) => setSubcat(res.data.result))
      .catch((err) => console.log(err));
    setIsLoading(false);
  };
  const foodType = () => {
    if (Type == 0) {
      axios.get(url + `product/type/${0}`).then((res) => {
        setType(1);
        setProducts(res.data.result);
        setIsLoading(false);
      });
    } else {
      setType(0);
      axios.get(url + `product`).then((res) => {
        setProducts(res.data.result);
        setIsLoading(false);
      });
    }
  };
  const menu = (
    <Menu>
      {" "}
      {category.map((cat) => (
        <Menu.Item key={cat.id} onClick={() => SubCat(cat.id)}>
          <h5>{cat.catName}</h5>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <Carousel />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="background">
          <Container>
            <hr />
            <div class="p-2 bg-white px-4">
              <div class="d-flex flex-row justify-content-between">
                <div class="d-flex flex-row align-items-center ">
                  <Dropdown overlay={menu} className="eat-filters">
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Eat Now
                      <FaSortDown
                        color="rgb(245, 226, 57)"
                        className="eat-now"
                      />
                    </a>
                  </Dropdown>
                </div>
                <div class="d-flex flex-row align-items-center ">
                  <div class="d-flex flex-row align-items-center">
                    <Button
                      type="text"
                      className="veg-btn"
                      onClick={() => foodType()}
                    >
                      {Type == 0 ? "All" : "VEG"}
                    </Button>
                    {/* <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="filters">
                      <RiEqualizerLine className="filter-icon" />
                      FILTERS
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                        <Checkboxfeature />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}
                  </div>
                  <div class="d-flex flex-row align-items-center ml-3"></div>
                </div>
              </div>
            </div>
            <Row>
              <Col md={3}>
                <nav
                  id="sidebarMenu"
                  class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
                >
                  {" "}
                  <div class="position-sticky pt-3">
                    <ul class="nav flex-column">
                      {subCat.map((sub) => (
                        <li class="nav-item" key={sub.id}>
                          <a class="nav-link" href="#">
                            <span data-feather="file"></span>
                            {sub.catName}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </Col>
              <Col md={9}>
                <Row>
                  {product.map((result, i) => (
                    <Col md={6} xs={12} sm={12} xl={4} key={result.id}>
                      <Product result={result} />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};
export default PostData;
