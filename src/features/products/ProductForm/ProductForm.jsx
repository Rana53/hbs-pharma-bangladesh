import React, {Component} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import SingleForm from './SingleForm';
import SingleFormHeader from './SingleFormHeader';
import FormList from './FormList';

class ProductForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      date : '2020-11-11',
      newFormOpen: false,
      formData: [
      ]
    }
  }
  onSubmitFullForm = () => {
    axios.post('http://localhost:8000/api/product/store-product', {formData: this.state.formData})
    .then(response => {
      if(response.data.success){
        
        this.setState({
          newFormOpen: false,
          formData: []
        })
      }
      
    })
  }
  onFormSubmit = (newForm) => {
    const newFormData = this.state.formData
    console.log("Data in Log " ,newFormData);
    newFormData.push(newForm)
    this.setState({
      formData: newFormData,
      newFormOpen: false
    })
   
  }
  onFormCancel = () => {
    console.log("Cancel Form");
    this.setState({
      newFormOpen: false
    })
  }
  onRemoveFormData = (index) => {
     const newFormData = this.state.formData.filter((data, i) => {return i !== index})
     this.setState({
      formData: newFormData
    })
  }
  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render () {
    let company = [
      {
        id: 1,
        companyName: 'Advanced Chemical Industries',
        nickName: 'ACI',
        product: [
          'Napa-500',
          'Napa-Extra',
          'Losectil'
        ]
      },
      { 
        id: 2,
        companyName: 'GlaxoSmithKline plc',
        nickName: 'GSK',
        product: [
          'Peracitamol-500',
          'aich-Plus',
          'Seclo'
        ]
      }
    ]
    const {date, newFormOpen} = this.state;
    return (
      <Container style={{margin: "10px", minHeight: "500px"}}>
        <Row >
          <Col 
            style={{ 
              paddingRight:"20px",
              borderRight: "1px solid #ccc"
            }}
            xs={11}> 
            <div className="text-center">
              <span>Product Added Form</span>
            </div>
            <Form>
                <Form.Group style={{width: "50%"}}>
                  <Form.Label>Product Purchase Date</Form.Label>
                  <Form.Control 
                    type="date" 
                    value={date}
                    name='date'
                    onChange={this.onChangeInput}
                  />
                </Form.Group>
                <SingleFormHeader/>
                {
                  this.state.formData && 
                  this.state.formData.map((singleForm, index) => (
                    <div>
                    <FormList 
                      key={index} // index define because key are undefine in formlist
                      index={index}
                      onRemoveFormData={this.onRemoveFormData}
                      form={singleForm}
                    />                    
                    </div>
                  ))
                } 
                {  
                  newFormOpen && 
                  <SingleForm 
                    productDetails={company} 
                    onFormSubmit={this.onFormSubmit}
                    cancelForm={this.onFormCancel}
                  />
                }
                <div className="text-center" style={{marginBottom: "1%"}}>
                  <Button  
                    variant="outline-info" 
                    onClick={() => this.setState({newFormOpen:true})} 
                  >
                    Add+ A New Product
                  </Button>
                </div>
              </Form>
              {
                this.state.formData.length > 0 && 
                <Button 
                  variant="warning" 
                  size='md' block
                onClick={this.onSubmitFullForm}
                >
                  Submit
                </Button>                
              }
          </Col>
          <Col xs={1}>
            Activity
          </Col>
        </Row>
      </Container>
    )
  }
}
export default ProductForm;