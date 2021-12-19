import React from 'react';
import './App.css';

// Layout Component
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import Footer from './layout/Footer';

// Elements
import Realtors from './elements/Realtors';
import Features from './elements/Features';
import Story from './elements/Story';
import Homes from './elements/Homes';
import Gallery from './elements/Gallery';

const App = () => {
  return (
    <div className='container'>
      <Sidebar className="sidebar" />
      <div>
        <Header className="header" />
        <Realtors className="realtors" />
      </div>
      <Features className="features" />
      <Story className="story" />
      <Homes className="homes" />
      <Gallery className="gallery" />

      <Footer className="footer" />
    </div>
  )
}

export default App;