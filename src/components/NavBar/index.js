import React from 'react';
import  { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@components/Button';

const NavBar = ({isAuthenticated}) => (
  <header>
    <div className="app-name">
      <Link to='/'>
        <h2>POLITICO</h2>
      </Link>
    </div>
    <div className="sign-btn">
      <span className="home-btn">
        {
          !isAuthenticated ?
            ( <span className="home-btn">
                <Link to='/signup'>
                  <Button className="btn nav-btn" value='Sign Up'/>
                </Link>
                <Link to='/login'>
                  <Button className="btn nav-btn" value='Login'/>
                </Link>
              </span>
            ) : (
              <span className="home-btn">
                <Link to='/vote'>
                  <Button className="btn" value='Dasboard'/>
                </Link>
              </span>
            )
          }
      </span>
    </div>
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(NavBar);
