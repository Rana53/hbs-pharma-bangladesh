import React, {Component, Fragment } from 'react';
import './App.css';
import Navbar from './Header/Navbar';
import Title from './Header/title';
import Stores from './features/stores/stores';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './features/Home';
import Footer from './Header/Footer';
import ProductForm from './features/products/ProductForm/ProductForm';
import ProtectedRoutes from './features/routes/protectedRoutes';
import PageNotFound from './features/pageNotFound';
import AdminLogin from './features/auth/adminlogin'
class App extends Component {
  
  render () {
    return (
      <Fragment>
        <div style={{backgroundColor:'#D7F9F1'}}>
        <Title/>
        <Navbar/>
        <Route
          path='/(.+)'
          render={() => (
            <Fragment>
              <Switch>
                <Route exact path='/' component={Home}/>
                <ProtectedRoutes exact path='/store' component={Stores}/>
                <ProtectedRoutes path='/store/add-product' component={ProductForm}/>
                <Route path='/login' component={AdminLogin}/>
                <Route path='*' component={PageNotFound}/>
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