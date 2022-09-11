import { React, Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import FrontEndHeader from './FrontEndHeader';
import FrontEndFooter from './FrontEndFooter';
// import SideBar from '../components/SideBar';
import { ToastContainer } from 'react-toastify';

function FrontEndLayout(props) {
  const auth = useSelector(state => state.auth);
  return (
    <Fragment>
      <FrontEndHeader/>
      {/* {auth.isAuthenticated && <SideBar auth={auth}/>} */}
      <ToastContainer />
      {props.children}
      <FrontEndFooter/>
    </Fragment>
  )
}

export default FrontEndLayout
