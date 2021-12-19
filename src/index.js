import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './components/App';

// Pages
import About from './pages/about';
import Contact from './pages/contact';
import Products from './pages/products';

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </Router>
);

ReactDOM.render(<Root />,  document.getElementById('root'));