import React from 'react';
import '../App.css';

// Image Handling
import Logo from '../../../public/img/logo.png';
import Logos1 from '../../../public/img/logo-bbc.png';
import Logos2 from '../../../public/img/logo-forbes.png';
import Logos3 from '../../../public/img/logo-techcrunch.png';
import Logos4 from '../../../public/img/logo-bi.png';

const Header = () => {
  return (
    <header className='header'>

      <img src={Logo} className='header__logo' alt='Nexter Logo' />
      <h3 className='heading-3'>Your own home:</h3>
      <h1 className='heading-1'>The ultimate personal freedom</h1>
      <button className='btn header__btn'>View our properties</button>
      <div className='header__seenon-text'>Seen on</div>
      <div className='header__seenon-logos'>
        <img src={Logos1} alt='bbc' />
        <img src={Logos2} alt='forbes' />
        <img src={Logos3} alt='techcrunch' />
        <img src={Logos4} alt='business insider' />

      </div>


    </header>
  )
}

export default Header;
