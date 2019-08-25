import React from 'react';

const DashboardNavBar = () => {
  return (
    <header>
      <div className="title">
        <h3>User Dashboard</h3>
      </div>
      <div className="logout-con">
        <button id="logout" className="btn btn-warning"><a href="#">Logout</a></button>
      </div>
    </header>
  );
}

export default DashboardNavBar;
