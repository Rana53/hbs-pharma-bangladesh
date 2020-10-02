import React, {Component, Fragment} from 'react';
import AdminLogin from './auth/adminlogin';

class Home extends Component {
  state = {
    login : false
  }
  componentDidMount(){
    this.setState({
      login: localStorage.getItem('admin-login')?true: false
    })
  }
  render() {
    if(!this.state.login){
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
