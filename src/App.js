import React, {Component, Fragment } from 'react';
import './App.css';
import Navbar from './Header/Navbar';
import Title from './Header/title';
import Stores from './features/stores/stores';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './features/Home';
import Footer from './Header/Footer';
import ProductForm from './features/products/ProductForm/ProductForm';

class App extends Component {
  state = {
    logIn: true
  }
  toggleLogin = () => {
    this.setState({
      logIn : false
    })
  }
  render () {
    return (
      <Fragment>
        <div style={{backgroundColor:'#D7F9F1'}}>
        <Title/>
        <Navbar logIn={this.state.logIn} toggleLogin={this.toggleLogin}/>
        {
          !this.state.logIn ?
          <div className="container">
            <Route 
              exact 
              path='/' 
              render={() => (
                <Home logIn={this.state.logIn} toggleLogin={this.toggleLogin}/>
              )} 
            />
            <Route
              path='/(.+)'
                render={() => ( 
                  <Home logIn={this.state.logIn} toggleLogin={this.toggleLogin}/>
                )
              }
            />
          </div>
          :
          <div className="container">
            <Route 
              exact 
              path='/' 
              render={() => (
                <Home logIn={this.state.logIn} toggleLogin={this.toggleLogin}/>
              )} 
            />
            <Route
              path='/(.+)'
              render={() => (
                <Fragment>
                  <Switch>
                    <Route exact path='/store' component={Stores}/>
                    <Route path='/store/add-product' component={ProductForm}/>
                  </Switch>
                </Fragment>
                )
              }
            />
          </div>
        }
        
        <Footer/>
        </div>
      </Fragment>
    )
  }
}
export default withRouter(App);


//https://ui.dev/react-router-v4-pass-props-to-components/  (passing props)