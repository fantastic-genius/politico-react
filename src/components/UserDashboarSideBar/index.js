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
            <Link to="/dashboard">Dashboard</Link>
            </li>
          <li>
            <Link to="/vote">Vote</Link>
          </li>
          <li><a href="view_parties.html">Parties</a></li>
          <li><a href="my_votes.html">My Votes</a></li>
          <li><a href="petition.html">Submit Petition</a></li>
          <li className="treeview">
            <a href="#">
              <span>Settings</span>
              <span className="to-right"><i className="arrow down"></i></span>
            </a>
            <ul className="treeview-menu hide">
              <li><a href="profile.html">Update Profile</a></li>
              <li><a href="change_password.html">Change Password</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default UserDashboardSideBar;
