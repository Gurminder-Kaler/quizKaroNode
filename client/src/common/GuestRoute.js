import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const GuestRoute = ({ component: Component, auth, ...rest }) => (
  <Route {...rest} render={(props) => checkFunction(props, Component, auth)} />
);
const checkFunction = (props, Component, auth) => {
  console.log("authtt/////////////////", auth);
  if (auth.isAuthenticated === false) {
    return <Component {...props} />;
  } else {
    if (localStorage.getItem("role") === "CUSTOMER") {
      return <Redirect to="/customer/dashboard" />;
    } else if (localStorage.getItem("role") === "ADMIN") {
      return <Redirect to="/admin/dashboard" />;
    }
    // return <Component {...props} />;
  }
};
GuestRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(GuestRoute);
