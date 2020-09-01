import React from 'react'
import {Row, Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faWindowClose } from '@fortawesome/free-solid-svg-icons'
const FormList = (props) => {
  const {companyName,productName,category,totalProduct,totalPrice,prePieceSalePrice} = props.form
  console.log(props)
  return (    
    <Row>
        <Col>{companyName}</Col>
        <Col>{productName}</Col>
        <Col>{category}</Col>
        <Col>{totalProduct}</Col>
        <Col>{totalPrice}</Col>
        <Col>{prePieceSalePrice}</Col>
        <Col>
          <Button 
            variant="outline-info" 
            style={{width:"40%", height: '100%'}}
  //          onClick={() => this.props.onFormSubmit(this.state.singleForm)}
            >
            <FontAwesomeIcon icon={faEdit}/> 
          </Button>
          <Button 
            variant="outline-danger" 
            style={{width:"40%", height: '100%', marginLeft: "3%"}}
//            onClick={this.props.cancelForm}
            >
            <FontAwesomeIcon icon={faWindowClose}/> 
          </Button>
        </Col>
      </Row>
  )
}
export default FormList;