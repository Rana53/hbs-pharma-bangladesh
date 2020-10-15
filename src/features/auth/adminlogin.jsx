import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom'
import { Container, Image, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import AdminImage from '../../assets/admin/admin_habib.jpg'

class AdminLogin extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  }
  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onLogin = () => {
    axios.get(`http://localhost:8000/api/admin/${this.state.email}`)
    .then(response => {
      if(response.data.success){
        this.props.onLogin(this.state.email)
      } else{
        this.setState({
          error: 'Admin Invalid'
        })
      }
    })
  }
  
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
                <Form.Control 
                  name='email'
                  value={this.state.email}
                  type="email" 
                  placeholder="Enter email" 
                  onChange={this.onChangeInput}
                />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    name='password'  
                    value={this.state.password}
                    onChange={this.onChangeInput}
                  />
                </Form.Group>
                { this.state.error && 
                  <p style={{backgroundColor:'red'}}>{this.state.error}</p>
                }
                
                <Button variant="info" as="submit" size='md' block onClick={this.onLogin}>Submit</Button>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default withRouter(AdminLogin);
