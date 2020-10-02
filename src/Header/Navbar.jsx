import React, { Fragment ,Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import AdminAuth from '../features/auth/adminAuth'
class NavbarX extends Component {
  state = {
    login: AdminAuth.isAuthenticated()
  }
  logOut = () => {
    localStorage.removeItem('admin-login');
    this.setState({
      login: false
    })
    this.props.history.push('/fasd')
  }
  render() {
  const {login} = this.state
  return (
    <Navbar bg="dark" variant="dark"  sticky="top">
    <Navbar.Brand>HBS</Navbar.Brand>
    <Nav className="mr-auto" style={{paddingLeft: "19px"}}>
      <Nav.Link href='/'>Home</Nav.Link>
      {
        login && 
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
      login?
      <Button style={{marginLeft: "5px"}} onClick={this.logOut}>Logout</Button>
      :
      <Button style={{marginLeft: "5px"}} >Customer Login</Button>
    }
    
    
  </Navbar>
  ) 
  }
}
export default withRouter(NavbarX);