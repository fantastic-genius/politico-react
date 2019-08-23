import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@components/NavBar';
import Footer from '@components/Footer';
import Button from '@components/Button';

const Home = () => (
    <div className="container home-con" >
      <NavBar />
      <div className="main">
        <div className="home">
          <div className="overlay">
            <div className="home-item-con">
              <h1>POLITICO</h1>
              <article>
                  <p>
                      This is an application where users can vote for election. In addition you can apply as a candidate
                      under a party and also cast votes for those who have shown interest for an office
                  </p>
              </article>
              <div className="home-btn">
                  <Link to='/signup'>
                    <Button className="btn" value='Sign Up'/>
                  </Link>
                  <Link to='/login'>
                    <Button className="btn" value='Login'/>
                  </Link>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <Footer />
    </div>
  )

export default Home;
