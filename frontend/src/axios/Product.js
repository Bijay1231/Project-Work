import React from "react";
import { Card, Button, Container, Figure } from "react-bootstrap";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";
import { url } from "../url";
// import NavbarMenu from "../Myntra/Navbar";
// import SidebarMenu from "../components/menu/SidebarMenu";

function Product({ result }) {
  return (
    <>
      <Container>
        <div className="card-deck mt-3">
          <Card
            style={{ width: "18rem" }}
            className="mb-5 p-3 card bg-white shadow border-0 mx-auto"
          >
            <div class="mx-auto">
              <Figure className="pro-figure">
                <Card.Img
                  className="card-img-top img-responsive "
                  variant="top"
                  src={url + result.productImage}
                  alt={result.id}
                />
              </Figure>
            </div>

            <Card.Body>
              <Card.Title>
                <h5>{result.menuName}</h5>
              </Card.Title>
              <Card.Subtitle className="text-muted mt-2">
                <img
                  src={
                    result.foodType == 0
                      ? "https://img.icons8.com/color/28/000000/vegetarian-food-symbol.png"
                      : "https://img.icons8.com/color/28/000000/non-vegetarian-food-symbol.png"
                  }
                />

                <span className="">|{result.calories} Cal</span>
              </Card.Subtitle>
              <div className="card-price lead">₹{result.sellPrice}</div>
              <div className="text-muted lead">
                ₹<s>{result.regularPrice}</s>
              </div>
              <Link to={`/product/${result.id}`} className="link w-sm-100">
                <Button
                  size="lg"
                  variant="outline-secondary"
                  className="rounded-pill float-right"
                  // onClick={(e) => addToCart(result.id, 1)}
                >
                  Quick view <i class="icofont-culinary"></i>
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
export default Product;
