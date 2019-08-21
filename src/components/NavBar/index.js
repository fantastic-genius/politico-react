import React from 'react';
import  { Link } from 'react-router-dom';
import Button from '@components/Button';

const NavBar = () => (
  <div>
    <header>
        <div className="app-name">
          <Link to='/'>
            <h2>POLITICO</h2>
          </Link>
        </div>
        <div className="sign-btn">
            <span className="home-btn">
              <Link to='/signup'>
                <Button className="btn" value='Sign Up'/>
              </Link>
              <Link to='login'>
                <Button className="btn" value='Login'/>
              </Link>
            </span>
        </div>
    </header>
  </div>
);

export default NavBar;
