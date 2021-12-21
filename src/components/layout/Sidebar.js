import React, { useState } from 'react';
import '../App.css';

const Sidebar = () => {

  const [ toggle, setToggle ] = useState(true);

  const openSidebar = () => {
    console.log('open');
    setToggle(true);
  }

  const closeSidebar = () => {
    console.log('close');
    setToggle(false);
  }


  return (
    <div className="sidebar">
      { toggle ? 
          <button 
            className="nav-btn--open" 
            onClick={openSidebar}
          ><i className="fas fa-angle-right"></i></button>
        :
          <button 
            className='nav-btn--close' 
            onClick={closeSidebar}
          ><i className="fas fa-times"></i></button>  
        }
    </div>
  )
}

export default Sidebar;
