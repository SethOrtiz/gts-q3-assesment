import React from 'react'
import { Form, Input } from "reactstrap";
import { FaSearch } from "react-icons/fa"

const searchStyle = {
  display: 'flex',
  alignItems: 'center'
}

const searchIconStyle = {
  margin: '-2.5em',
  height: '3em',
  width: '2.5em',
  border: '1px solid #cccccc',
  padding: '0.4em',
  borderRadius: '0px 5px 5px 0px'
}

function ProductFilter({ searchProducts }) {
  function changeHandler(e){
    searchProducts(e.target.value)
  }

    return (
        <>
          <Form style={searchStyle}>
              <Input  bsSize="lg" type="text" onChange={changeHandler} placeholder="Search by Product Name" />
              <FaSearch style={searchIconStyle}/>
          </Form>
        </>
    )
}
export default ProductFilter