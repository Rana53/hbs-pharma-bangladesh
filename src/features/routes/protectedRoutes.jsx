import React from 'react';
import {Route} from 'react-router-dom'
import AdminAuth from '../auth/adminAuth'
const ProtectedRoutes= ({component: Component, ...rest}) => {
  return(
    <Route
      {...rest}
      render={props =>{
        if(AdminAuth.isAuthenticated()){
          return <Component {...props}/>
        } else {
          props.history.push('/')
        }
      }}
    />
  )
}
export default ProtectedRoutes;