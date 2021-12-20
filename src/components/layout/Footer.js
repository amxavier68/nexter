import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='nav'>
        <li className='nav__item'>
          <Link to="/" className='nav__link'>Find your dream home</Link>
        </li>
        <li className='nav__item'>
          <Link to="/proposals" className='nav__link'>Request proposal</Link>
        </li>
        <li className='nav__item'>
          <Link to="/tools" className='nav__link'>Download home planner</Link>
        </li>
        <li className='nav__item'>
          <Link to="/contact" className='nav__link'>ContactUs</Link>
        </li>
        <li className='nav__item'>
          <Link to="/" className='nav__link'>Submit your property</Link>
        </li>
        <li className='nav__item'>
          <Link to="/" className='nav__link'>Come work with us</Link>
        </li>
      </ul>

      <p className="copyright">&copy; Copyright 2021, All Rights Reserved. By Anthony Xavier.</p>
    </footer>
  )
}

export default Footer;
