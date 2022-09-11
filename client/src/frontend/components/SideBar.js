import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getUserViaId } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const SideBar = (props) => {
  console.log('Sidebar props', props);
  const location = useLocation();
  const { pathname } = location;
  const splitUrl = pathname.split("/");

  const dispatch = useDispatch();
  useEffect(() => {
    console.log('props111', props);
    dispatch(getUserViaId(props.auth.user.userId));
  }, []);

  const userState = useSelector(state => state.user.user);
  // const [user , setUser] = useState(userState);
  console.log('yser', userState);
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" className="brand-link">
        <span className="brand-text font-weight-light">SkyBook</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            {/* <img src="/%PUBLIC_URL%/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" /> */}
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Welcome {userState && userState.firstName}
            </a>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
            <li className="nav-item has-treeview menu-open">
              <Link
                to="/customer/dashboard"
                className="nav-link"
              >
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/customer/friend"
                className="nav-link"
              >
                <i className="nav-icon fas fa-users" />
                <p>Friends</p>
              </Link>
            </li>
            <li
              className="nav-item has-treeview"

            >
              <Link to="#" className="nav-link">
                <i className="nav-icon fas fa-copy" />
                <p>
                  Settings
                  <i className="fas fa-angle-left right" />
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link
                    to="/customer/aboutus"
                    className="nav-link"
                  >
                    <i className="nav-icon fas fa-edit" />
                    <p>About Us</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};
export default SideBar;
