import React, { useState }  from 'react';
import { Nav } from 'react-bootstrap'
import './Home.css';
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Home = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    <Nav className='main-nav'>
        <div className='logo'>
        <h2>
                <span>MS</span>
                DiamondTools
            </h2>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/category">category</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contactUs</NavLink>
            </li>
          </ul>
        </div>
        <div className='profile-grid'>
        <ul className="profile-grid-desktop">
           <li> <a href='#login'>Login/SignUp</a></li>
           <li> <a href='#profile'>Profile</a></li></ul>

           <div className="hamburger-menu">
            <a href="/mobile" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
    </Nav>
    </>
  )
}

export default Home