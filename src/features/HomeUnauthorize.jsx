import React, {Component, Fragment} from 'react';
import AdminLogin from './auth/adminlogin';


class Home extends Component {
  constructor(props){
    super(props)
  }
  state = {
    adminLogin: false
  }
  render() {
    console.log("Unauthorize ", this.props)
    const {adminLogin} = this.state;
    return (
      <Fragment>
        { !adminLogin && <AdminLogin/> }
      </Fragment>
    ) 
  }
}

export default Home;
