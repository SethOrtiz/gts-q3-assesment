import React from "react";
import Nav from "./Nav";
import Cart from "./Cart";
import ProductContainer from "./ProductContainer";
import ProductFilter from "./ProductFilter";
import { Container, Row, Col } from "reactstrap";

class MainContainer extends React.Component {
  state = {
    products: [],
    searchBy: ""
  };

  componentDidMount = async () => {
    try {
      const res = await fetch("http://localhost:8000/cameras");
      if (!res.ok) throw new Error();
      const products = await res.json();
      this.setState({
        products: products
      });
    } catch (e) {
      alert(e);
    }
  };

  addToCart = id => {
    this.setState(prevState => {
      return {
        products: prevState.products.map(product => {
          if (product.id === id) {
            return {
              ...product,
              inCart: true
            };
          } else {
            return product;
          }
        })
      };
    });
  };

  addItemToCart = async id => {
    try {
      const res = await fetch(`http://localhost:8000/cameras/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          inCart: true
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!res.ok) {
        throw new Error();
      } else {
        this.addToCart(id);
      }
    } catch (e) {
      alert(e);
    }
  };

  removeFromCart = async id => {
    try {
      const res = await fetch(`http://localhost:8000/cameras/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          inCart: false
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!res.ok) {
        throw new Error();
      } else {
        this.removeItemFromCart(id);
      }
    } catch (e) {
      alert(e);
    }
  };

  removeItemFromCart = id => {
    this.setState(prevState => {
      return {
        products: prevState.products.map(product => {
          if (product.id === id) {
            return {
              ...product,
              inCart: false
            };
          } else {
            return product;
          }
        })
      };
    });
  };

  changeSearch = newSearch => {
    this.setState({
      searchBy: newSearch
    });
  };

  render() {
    const cartItemsList = this.state.products.filter(
      product => product.inCart === true
    );
    const cartTotal = cartItemsList.reduce(
      (accumlator, currentValue) => accumlator + currentValue.price,
      0
    );
    const searchedProducts = this.state.products.filter(
      product =>
        product.name
          .toLowerCase()
          .includes(this.state.searchBy.toLowerCase()) === true
    );

    return (
      <>
        <Nav />
        <Container>
          <Row>
            <Col sm="6" xs="6" lg="6">
              <Container>
                <ProductFilter searchProducts={this.changeSearch} />
                <br />
                <ProductContainer
                  products={searchedProducts}
                  addItemToCart={this.addItemToCart}
                />
              </Container>
            </Col>
            <Col sm="6" xs="6" lg="6">
              <Cart
                removeFromCart={this.removeFromCart}
                cartItemsList={cartItemsList}
                cartTotal={cartTotal}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default MainContainer;
