import React, {Component, Fragment } from 'react';

import './App.css';
import Navbar from './Header/Navbar';
import Title from './Header/title';
import Stores from './features/stores/stores';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './features/Home';
import Footer from './Header/Footer';
import ProductDashboard from './features/products/Dashboard/productDashboard';
import ProductForm from './features/products/ProductForm/ProductForm';
import ProtectedRoutes from './features/routes/protectedRoutes';
//import PageNotFound from './features/pageNotFound';
import AdminLogin from './features/auth/adminlogin'
class App extends Component {
  state={
    adminLogin: localStorage.getItem('admin-name') ? true : false
  }
  onLogin = (email) => {
    console.log(email)
    localStorage.setItem('admin-name', email);
    this.setState({
      adminLogin: true
    })
    this.props.history.push('/');
  }
  onLogout = () => {
    localStorage.removeItem('admin-name');
    this.setState({
      adminLogin: false
    })
    this.props.history.push('/');
  }
  render () {
    return (
      <Fragment>
        <div style={{backgroundColor:'#D7F9F1'}}>
        <Title/>
        <Navbar login={this.state.adminLogin} onLogout={this.onLogout}/>
        <Route exact path='/'
          render={(props) => (
            <Home {...props} login={this.state.adminLogin} />
          )}
        />
        <Route exact path='/admin-login'
          render={(props) => (
            <AdminLogin {...props} onLogin={this.onLogin}/>
          )}
        />
        <Route
          path='/(.+)'
          render={() => (
            <Fragment>
              <Switch>
                <ProtectedRoutes exact path='/store' component={Stores}/>
                <ProtectedRoutes path='/store/add-product' component={ProductForm}/>
                <ProtectedRoutes path='/store/product-dashboard' component={ProductDashboard}/>
              </Switch>
            </Fragment>
            )
          }
        />
        <Footer/>
        </div>
      </Fragment>
    )
  }
}
export default withRouter(App);


//https://ui.dev/react-router-v4-pass-props-to-components/  (passing props)

//for use of token https://www.youtube.com/watch?v=s1swJLYxLAA&ab_channel=Keith%2CtheCoder

/* 
pass props with route
https://ui.dev/react-router-v4-pass-props-to-components/
*/