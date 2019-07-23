import React from "react";
import { Jumbotron   } from "reactstrap";


const navStyle= {
  backgroundColor: '#007bff',
  height: '3em',
  paddng: 'none',
  display: 'flex',
  alignItems: 'center',
  color: '#222222'
}


function App() {

  return (
    <Jumbotron style={navStyle}color="primary">
      <h1>Camera Shop</h1>
    </Jumbotron>
  );
}
export default App;
