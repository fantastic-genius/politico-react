import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { signout } from '@actions/Auth';

const DashboardNavBar = (props) => {
  const onSignOut = () => {
    props.signout();
    <Redirect to='/' />
  }
  return (
    <header>
      <div className="title">
        <div className="app-name">
          <Link to='/'>
            <h2>POLITICO</h2>
          </Link>
        </div>
      </div>
      <div className="logout-con">
        <button id="logout" className="btn btn-warning" onClick={onSignOut}><a href="#">Logout</a></button>
      </div>
    </header>
  );
}
const mapStateToProps = state => ({
  user: state.auth.user
})
export default connect(mapStateToProps, {signout})(DashboardNavBar);
