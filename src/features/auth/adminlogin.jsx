import React, {Component, Fragment} from 'react';
import { Container, Image, Form, Button, Row, Col } from 'react-bootstrap';
import AdminImage from '../../assets/admin/admin_habib.jpg'
class AdminLogin extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col></Col>
            <Col 
              style={{ 
                width:"30%",
                margin: '10px', 
                padding: '5px', 
                backgroundColor: '#47D9B8', 
                borderRadius: '10px', 
                color: 'white', 
                fontFamily: 'cursive'
              }}>
              <div style={{textAlign: 'center', padding: '5px'}}>
                <Image 
                  src={AdminImage}
                  style={{borderRadius: "19px",maxHeight: '130px', width:"50%"}}
                />
                <h3>Admin Login</h3>
                <hr/>
              </div>
              <Form 
                style={{
                  margin: '5%'
                }}>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Admin id</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="info" as="submit" size='md' block>Submit</Button>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default AdminLogin;
