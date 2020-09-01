import React, { Fragment } from 'react'
import {Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';

const NavbarX = ({logIn,toggleLogin}) => {
  return (
    <Navbar bg="dark" variant="dark"  sticky="top">
    <Navbar.Brand>HBS</Navbar.Brand>
    <Nav className="mr-auto" style={{paddingLeft: "19px"}}>
      <Nav.Link href='/'>Home</Nav.Link>
      {
        logIn && 
        <Fragment>
          <Nav.Link href='/store'>Store</Nav.Link>
          <Nav.Link>Sale</Nav.Link>
          <Nav.Link>Customer</Nav.Link>
        </Fragment>
      }
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    {
      logIn?
      <Button style={{marginLeft: "5px"}} onClick={toggleLogin}>Logout</Button>
      :
      <Button style={{marginLeft: "5px"}} >Customer Login</Button>
    }
    
    
  </Navbar>
  ) 
}
export default NavbarX;