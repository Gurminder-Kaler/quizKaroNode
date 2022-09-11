import { React, Fragment } from 'react';
import BackEndHeader from './BackEndHeader';
import BackEndFooter from './BackEndFooter';
import SideBar from '../components/SideBar';
import { ToastContainer } from 'react-toastify';

function BackEndLayout(props) {
  return (
    <Fragment>
      <BackEndHeader/>
      <SideBar/>
      <ToastContainer />
      {props.children}
      <BackEndFooter/>
    </Fragment>
  )
}

export default BackEndLayout
