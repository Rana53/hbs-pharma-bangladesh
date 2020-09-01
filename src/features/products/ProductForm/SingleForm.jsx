import React,{Component} from 'react';
import {Row, Col, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faWindowClose } from '@fortawesome/free-solid-svg-icons'

//const SingleForm = ({singleForm,company}) => {
class SingleForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      selectedGroupIndex: -1,
      singleForm: this.getSingleFormState(),
      error: false
    }
  }
  getSingleFormState = () => {
    const initialState = {
      companyName: '',
      productName: '',
      category: '',
      totalProduct: null,
      totalPrice: null,
      prePieceSalePrice: null,
    }
    return initialState;
  }
  onSingleFormSubmit = () => {
    const form = this.state.singleForm
    console.log(form)
    if(!form.companyName || !form.productName || !form.category || !form.totalProduct || !form.totalPrice || !form.prePieceSalePrice){
      console.log("Error")
      this.setState({
        error: true
      })
    }else{
      this.setState({
        error: true
      })
      this.props.onFormSubmit(this.state.singleForm)
    }
      
  }
  onChangeProductGroup = (indexId) => {
    const singleFormChange = this.state.singleForm;
    singleFormChange.companyName = this.props.productDetails[indexId].nickName
    this.setState({
      singleForm: singleFormChange,
      selectedGroupIndex: indexId
    })
  }
  onChangeProductName = (productName) => {
    const singleFormChange = this.state.singleForm;
    singleFormChange.productName = productName
    this.setState({
      singleForm: singleFormChange
    })
  }
  onChangeProductCategory = (category) => {
    const singleFormChange = this.state.singleForm;
    singleFormChange.category = category
    this.setState({
      singleForm: singleFormChange
    })
  }
  onChangeInput = (e) => {
    const singleFormChange = this.state.singleForm;
    if(e.target.name === "totalProduct"){
      singleFormChange.totalProduct = e.target.value
    }
    if(e.target.name === "totalPrice"){
      singleFormChange.totalPrice = e.target.value
    }
    if(e.target.name === "prePieceSalePrice"){
      singleFormChange.prePieceSalePrice = e.target.value
    }
    
    this.setState({
      singleForm: singleFormChange
    })
    
  }

  render() {
    const {productDetails} = this.props;
    const {singleForm, selectedGroupIndex} = this.state;
    var categories = ["Tablet","Sirap","Injection"];
    
  return (
    <div style={{marginTop: "1%", marginBottom: "1%"}}>
      <Row>
        <Col>
          <DropdownButton variant="info" title={singleForm.companyName?singleForm.companyName: 'Select Group'}>  
          {
            productDetails &&
            productDetails.map((productGroup) => (
              <Dropdown.Item
                key={productGroup.id}
                value={singleForm.companyName}
                name='companyName'
                onSelect={() => this.onChangeProductGroup(productGroup.id-1)}
              >{productGroup.nickName}</Dropdown.Item>      
            ))    
          }
          </DropdownButton>
        </Col>
        <Col>
          <DropdownButton 
            variant="info" 
            title= {
              selectedGroupIndex !== -1?
                (singleForm.productName?singleForm.productName:'Select Product')
                :'Selet Group'}
          >  
          { 
            selectedGroupIndex !== -1 &&
            productDetails[selectedGroupIndex].product.map((productName) => (
              <Dropdown.Item
                key={productName}
                onSelect={() => this.onChangeProductName(productName)}
              >{productName}</Dropdown.Item>
            ))    
          }
          </DropdownButton>
        </Col>
        <Col>
        <DropdownButton variant="info" title={singleForm.category?singleForm.category: 'Category'}>  
          { 
            selectedGroupIndex !== -1 &&
            categories.map((category, index) => (
              <Dropdown.Item
                key={index}
                onSelect={() => this.onChangeProductCategory(category)}
              >{category}</Dropdown.Item>
            ))    
          }
          </DropdownButton>
        </Col>
        <Col>
          <input 
            className="form-control" 
            name='totalProduct'
            value ={singleForm.totalProduct} // if i not multiply 1 output added with 0
            placeholder="Total Product" 
            onChange={this.onChangeInput} 
          />
        </Col>
        <Col>
          <input 
            className="form-control" 
            name='totalPrice'
            value ={singleForm.totalPrice} // if i not multiply 1 output added with 0
            placeholder="Total Price" 
            onChange={this.onChangeInput} 
          />
        </Col>
        <Col>
          <input 
            className="form-control" 
            name='prePieceSalePrice'
            value ={singleForm.prePieceSalePrice} // if i not multiply 1 output added with 0
            placeholder="Per P. Sale Price"
            onChange={this.onChangeInput} 
          />
        </Col>
        <Col>
          <Button 
            variant="outline-info" 
            style={{width:"40%", height: '100%'}}
            onClick={this.onSingleFormSubmit}
  //          onClick={() => this.props.onFormSubmit(this.state.singleForm)}
            >
            <FontAwesomeIcon icon={faCheckCircle}/> 
          </Button>
          <Button 
            variant="outline-danger" 
            style={{width:"40%",height: '100%', marginLeft:"3%"}}
            onClick={this.props.cancelForm}
            >
            <FontAwesomeIcon icon={faWindowClose}/> 
          </Button>
        </Col>
      </Row>
      { 
        this.state.error &&
        <p 
          style={{
            backgroundColor: 'red', 
            marginTop: '.3%', 
            color: 'white',
            font: 'bold'
          }}
        >There are a problem in form</p>
      }
      
    </div>
  )
  
 }
}
export default SingleForm;