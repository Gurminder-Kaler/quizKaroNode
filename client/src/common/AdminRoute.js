import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BackEndDashboard from '../backend/pages/BackEndDashboard';

const AdminRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => checkFunction(props, Component, auth)}
  />
);
const checkFunction = (props, Component, auth) => {
  if(auth.isAuthenticated === true) {

    if(localStorage.getItem('role') === "ADMIN") {
      console.log('auth role', auth.role);
      return <Component {...props} />
    }
    else {
      return <Route exact path="/admin/dashboard" component={BackEndDashboard} />
    }
  } else {
     console.log('login role', auth.role);
    // const redirectURL = localStorage.getItem('redirection_url');
    // localStorage.setItem(ROMENT_REDIRECTION_URL, window.location.pathname);
    return <Redirect to="/login" />
  }
}
AdminRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AdminRoute);
