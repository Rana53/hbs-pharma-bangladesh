import React, {Component} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
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
                    <FormList 
                      key={index}
                      form={singleForm}
                    />                    
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
                this.state.formData.length >= 0 && 
                
                  <Button 
                  variant="warning" 
                  size='md' block
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