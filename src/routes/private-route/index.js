import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route render={(props) => localStorage.getItem('user')
    ? <Component />
    : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />} />
);
