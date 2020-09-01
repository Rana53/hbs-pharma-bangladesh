import React from 'react'
import {Row, Col} from 'react-bootstrap';

const SingleFormHeader = () => {
  return (
    <Row>
      <Col>Company</Col>
      <Col>Name</Col>
      <Col>Category</Col>
      <Col>Total Piece</Col>
      <Col>Total Prices</Col>
      <Col>Sale Price(PP)</Col>
      <Col>Action</Col>
    </Row>
  )
}

export default SingleFormHeader;