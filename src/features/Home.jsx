import React, {Component, Fragment} from 'react';
import AdminLogin from './auth/adminlogin';

class Home extends Component {
  
  render() {
    if(!this.props.logIn){
      return <AdminLogin/>
    }
    return (
      <Fragment>
          
          <h1>You are authorize</h1>
          <h1>You are authorize</h1>
          <h1>You are authorize</h1>
          <h1>You are authorize</h1>
        
      </Fragment>
    )
  }
}

export default Home;
