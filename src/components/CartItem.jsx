import React from "react";
import { Button, Container, Col, Row} from "reactstrap";
import { FaTrash } from "react-icons/fa"

const itemStyle= {
  display: 'flex',
  alignItems: 'center',
  color: 'black'
}

const containerStlye = {
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  margin: '0.2em 2em',
  borderRadius: '5px',
}


function CartItem({ id, name, removeFromCart }) {

  const clickHandler = () => {
    removeFromCart(id);
  };

  return (
    <Row style={itemStyle}>
      <Container style={containerStlye}>
        <Col>{name}</Col>
       <Button style={{border: '0.4em solid white'}} color='dark' outline onClick={ clickHandler } type="submit"><FaTrash/></Button>
       </Container>
    </Row>
  );
}

export default CartItem;
