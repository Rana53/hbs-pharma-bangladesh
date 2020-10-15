import React, { Component } from 'react'
import { Container, Form, FormControl, InputGroup, Table } from 'react-bootstrap';
import Axios from 'axios';
class ProductDashboard extends Component {
  state = {
    products: [],
    error: false
  }
  componentDidMount(){
    Axios.get('http://localhost:8000/api/product/all-products')
      .then(response => {
        if(response.data.success){
          this.setState({
            products: response.data.products 
          })
        }
      })
  }
  render() {
    return (
      <Container>
        <div className="text-center">
          <p>Your Data</p>
        </div>
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Tag to search</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form>
        
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Index</th>
            <th>Company</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Total Product</th>
            <th>Sale Pricee</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.products &&
            this.state.products.map((product,index) => (
              <tr>
                <td>{index}</td>
                <td>{product.companyName}</td>
                <td>{product.productName}</td>
                <td>{product.category}</td>
                <td>{product.totalProduct}</td>
                <td>{product.prePieceSalePrice}</td>
              </tr>
            ))
          }
        </tbody>
        </Table>
      </Container>
      )
  }
}

export default ProductDashboard;