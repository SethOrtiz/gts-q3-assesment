import React from "react";
import { Container, Button, Row } from "reactstrap";
import { FaTag } from "react-icons/fa";
import ReactStars from "react-stars";

function Product({ product, price, addItemToCart }) {
  const clickHandler = () => {
    addItemToCart(product.id);
  };

  const buttonStyle = {
    width: "30%",
    height: "100%",
    boxShadow: "0.05em 0.07em 0.5em 0.07em lightgrey"
  };
  const picStyle = {
    width: "15em"
  };

  const onSaleStyle = {
    height: "2em",
    color: "Red",
    alignSelf: "flex-start",
    textAlign: "center",
    fontWeight: "bold"
  };

  return (
    <Container>
      <Row style={{ display: "flex", flexDirection: "column" }}>
        <h1>{product.name}</h1>
        {!product.onSale ? (
          <div style={onSaleStyle}>
            <FaTag style={{ marginRight: "1em" }} />
            On Sale!
          </div>
        ) : (
          ""
        )}
      </Row>
      <Row>
        <img style={picStyle} src={product.picture} alt="Product Not Found" />
      </Row>
      <Row>
        <h4>{price}</h4>
      </Row>
      <Row>
        <strong style={{ fontWeight: "500" }}>Rating:</strong>
        </Row>
        <Row>
        <ReactStars
          count={product.rating}
          size={25}
          color1={"#888888"}
          color2={"#888888"}
        />
      </Row>
      <Row>
        <Button
          style={buttonStyle}
          color="primary"
          onClick={clickHandler}
          type="submit"
        >
          ADD TO CART
        </Button>
      </Row>
    </Container>
  );
}

export default Product;
