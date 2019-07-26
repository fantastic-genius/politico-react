import React from 'react';

const NavBar = () => (
  <div>
    <header>
        <div className="app-name">
            <h2>POLITICO</h2>
        </div>
        <div className="sign-btn">
            <span className="home-btn">
                    <button className="btn"><a href="./UI/signup.html">Signup</a></button>
                    <button className="btn"><a href="./UI/login.html">Login</a></button>
            </span>
        </div>
    </header>
  </div>
);

export default NavBar;
