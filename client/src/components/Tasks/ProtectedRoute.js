import React from 'react';
import { Route, Redirect } from 'react-router-dom';
 
function ProtectedRoute(props) {

  const { component: Component, user, ...rest} = props 
  
  console.log({ component: Component, user, rest });
 
  if (user) {
    return <Route {...rest} render={routeProps => <Component {...routeProps} userData={user} />} />;
  } else {
    return <Redirect to={{ pathname: '/', state: { from: rest.location } }} />;
  }
};
 
export default ProtectedRoute;

// This component will be imported and used inside the router in App.js