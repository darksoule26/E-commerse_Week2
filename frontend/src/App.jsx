import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from './contexts/CartContext';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='Products' element={< Products/>}/>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;

