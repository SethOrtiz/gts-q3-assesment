import React from "react";
import CartItem from "./CartItem";
import { Button, Card, Row } from "reactstrap";

const cardStyle = {
  color: "white",
  fontWeight: "500",
  fontSize: "1.3em",
  backgroundColor: "orange",
  padding: "1em",
  borderRadius: "5px",
  position: "fixed",
  width: "45%",
  boxShadow: "0.1em 0.2em 0.8em 0.2em lightgrey"
};

class Cart extends React.Component {
  render() {
    let cartElements = this.props.cartItemsList.map(product => {
      return (
        <CartItem
          key={product.id}
          title={product.name}
          price={product.price}
          id={product.id}
          removeFromCart={this.props.removeFromCart}
          {...product}
        />
      );
    });

    return (
      <Card style={cardStyle}>
        <h3>Your Cart</h3>
        <h5>{cartElements}</h5>

        <h5>
          Subtotal:{" "}
          {this.props.cartTotal.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })}{" "}
        </h5>
        <h5>
          Taxes:{" "}
          {(this.props.cartTotal * 0.086).toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })}{" "}
        </h5>
        <h4>
          Total Price ={" "}
          {(this.props.cartTotal + this.props.cartTotal * 0.086).toLocaleString(
            "en-US",
            {
              style: "currency",
              currency: "USD"
            }
          )}
        </h4>
        <Row>
          <Button size="lg" color="light" block>
            {" "}
            Checkout{" "}
          </Button>
        </Row>
      </Card>
    );
  }
}

export default Cart;
