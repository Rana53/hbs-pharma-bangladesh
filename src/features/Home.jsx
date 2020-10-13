import React, {Component, Fragment} from 'react';
//import AdminLogin from './auth/adminlogin';
import { withRouter } from 'react-router-dom'
class Home extends Component {
  render() {
    if(!this.props.login){
      this.props.history.push('/admin-login')
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

export default withRouter(Home);
