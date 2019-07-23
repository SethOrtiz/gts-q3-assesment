import React from "react";
import Product from "./Product";

class ProductContainer extends React.Component {

  render() {
    let Products = this.props.products.map(product => {
     
      return (
        <Product
          key={product.id}
          price={product.price.toLocaleString("en-US", {style: "currency",currency: "USD"})}
          addItemToCart={this.props.addItemToCart}
          product={product}
        />
      );
    });

    return (
      <div>
        <div>
          {Products}
        </div>
      </div>
    );
  }
}

export default ProductContainer;