import React, { Fragment } from "react";

import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
// import { clearCurrentProfile } from '../../actions/profileActions'
// import { getUserViaId } from '../../actions/userActions'
import { useDispatch, useSelector } from "react-redux";

function FrontEndHeader(props) {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <li>
        <Link className="nav-link" to="/customer/dashboard">
          <i className="nav-icon text-danger fas fa-list" />
          &nbsp; Dashboard
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/customer/timeline">
          <i className="nav-icon fas fa-list" />
          &nbsp; TimeLine
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/customer/post">
          <i className="nav-icon fas fa-users" />
          &nbsp; Your Posts
        </Link>
      </li>
      <li>
        <Link to="/customer/friend" className="nav-link">
          <i className="nav-icon fas fa-users" />
          &nbsp; Your Friends
        </Link>
      </li>
      <li>
        <Link to="/customer/company" className="nav-link">
          <i className="nav-icon fas fa-home" />
          &nbsp; Your Companies
        </Link>
      </li>
      <li>
        <Link to="/customer/group" className="nav-link">
          <i className="nav-icon fas fa-comments" />
          &nbsp; Your Groups
        </Link>
      </li>
      <li className="nav-item ">
        <div
          onClick={() => dispatch(logoutUser())}
          className="text-danger nav-link"
        >
          <i className="fa fa-power-off"></i>
          &nbsp;{"Logout"}
        </div>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );
  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            SkyBook {isAuthenticated && `[Hi ${user.userName}]`}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            {/* <ul className='navbar-nav mr-auto'>
              <li>
                <Link className='nav-link' to='/post'>
                  <i className='nav-icon fas fa-users' />
                  &nbsp; All Posts
                </Link>
              </li>
              <li>
                <Link to='/customer/friend' className='nav-link'>
                  <i className='nav-icon fas fa-users' />
                  &nbsp; Friends
                </Link>
              </li>
              <li>
                <Link to='/customer/message' className='nav-link'>
                  <i className='nav-icon fas fa-comments' />
                  &nbsp; Messages
                </Link>
              </li>
            </ul> */}
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default FrontEndHeader;
