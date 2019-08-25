import React from 'react';
import DashboardNavBar from '@components/DashboardNavBar';
import UserDashboardSideBar from '@components/UserDashboarSideBar';
import Footer from '@components/Footer';

const DashboardContainer = ({ children }) => {
  return (
    <div className="container dashboard">
      <DashboardNavBar />
      <div className="main">
        <UserDashboardSideBar />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default DashboardContainer;
