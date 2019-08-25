import React from 'react';
import { Link } from 'react-router-dom';
import UserInfo from '@components/UserInfo';

const UserDashboardSideBar = () => {
  return (
    <aside>
      <UserInfo />
      <div className="menu">
        <ul>
          <li>
            <Link to="/vote">Vote</Link>
          </li>
          <li>
            <Link to="/myvote">My Votes</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default UserDashboardSideBar;
