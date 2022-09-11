import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BackEndDashboard from '../backend/pages/BackEndDashboard';

const CustomerRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => checkFunction(props, Component, auth)}
  />
);
const checkFunction = (props, Component, auth) => {
  if(auth.isAuthenticated === true) {
    if(localStorage.getItem('role') === "CUSTOMER") {
      return <Component {...props} />
    }
    else {
      return <Route exact path="/admin/dashboard" component={BackEndDashboard} />
    }
  } else {
    return <Redirect to="/login" />
  }
}
CustomerRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(CustomerRoute);
