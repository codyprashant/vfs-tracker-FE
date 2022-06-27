import React, { Fragment } from 'react';
import Loader from "../layout/loader";
import Taptop from "../layout/tap-top";
import Header from '../layout/header'
import Sidebar from '../layout/sidebar'
import Footer from '../layout/footer'
import { ToastContainer } from 'react-toastify'
import { Outlet } from 'react-router-dom';


const AppLayout = ({ children, classNames, ...rest }) => {

  return (
    <Fragment>
      <Loader />
      <Taptop />
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
        <Header />
        <div className="page-body-wrapper">
          <Sidebar />
          <div className="page-body">
                <div>
                  <Outlet />
                </div>
            </div>
          <Footer />
        </div>
      </div>
      {/* <ThemeCustomize /> */}
      <ToastContainer />
    </Fragment>
  );
}

export default AppLayout;