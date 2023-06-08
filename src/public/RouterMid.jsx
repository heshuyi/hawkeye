import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route,Redirect } from 'react-router-dom';

 const RouterMid = ({ component: Component, ...rest }) => {
    const {loginFlag} = useSelector(state=>state.user)
    return (
        <Route {...rest} render={(props) => (
            loginFlag === true
            ? <Component {...props} />
            : <Redirect to='/login' />
        )} />
      )};
      export default RouterMid