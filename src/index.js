import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './components/App';

// Pages
import About from './pages/about';
import Contact from './pages/contact';
import Products from './pages/products';
import Proposals from './pages/proposal';
import Tools from './pages/tools';

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/proposals" element={<Proposals/>} />
      <Route path="/tools" element={<Tools/>} />
    </Routes>
  </Router>
);

ReactDOM.render(<Root />,  document.getElementById('root'));