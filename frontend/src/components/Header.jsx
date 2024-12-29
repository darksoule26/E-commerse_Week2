import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Home, Zap, ChevronDown, User } from 'lucide-react';

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleProductsMenu = useCallback(() => {
    setIsProductsOpen(!isProductsOpen);
  }, [isProductsOpen]);

  return (
    <header style={{
      background: 'linear-gradient(135deg, #0099f7 0%, #00c9ff 100%)',
      padding: isScrolled ? '0.5rem 0' : '1rem 0',
      transition: 'all 0.3s ease',
      boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <h1 style={{ margin: 0 }}>
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
          }}>
            <span style={{
              background: 'white',
              color: '#0099f7',
              borderRadius: '50%',
              padding: '0.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}>
              <Zap size={24} />
            </span>
            <span>ElectroNova</span>
          </Link>
        </h1>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <NavLink to="/">
            <Home size={18} />
            <span>Home</span>
          </NavLink>
          <div style={{ position: 'relative' }}>
            <button 
              onClick={toggleProductsMenu}
              aria-haspopup="true"
              aria-expanded={isProductsOpen}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                color: 'white',
                background: 'none',
                border: 'none',
                padding: '0.5rem',
                borderRadius: '0.25rem',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
            >
              <Zap size={18} />
              <span>Products</span>
              <ChevronDown size={14} style={{
                transition: 'transform 0.3s ease',
                transform: isProductsOpen ? 'rotate(180deg)' : 'rotate(0)',
              }} />
            </button>
            {isProductsOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '0',
                background: 'white',
                borderRadius: '0.25rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                width: '200px',
                zIndex: 10,
              }}>
                <DropdownLink to="/products">All Products</DropdownLink>
                <DropdownLink to="/products/new">New Arrivals</DropdownLink>
                <DropdownLink to="/products/categories">Smart Home</DropdownLink>
              </div>
            )}
          </div>
          {!isLoggedIn ? (
            <NavLink to="/login" onClick={() => setIsLoggedIn(true)}>
              <User size={18} />
              <span>Login</span>
            </NavLink>
          ) : (
            <NavLink to="/profile">
              <User size={18} />
              <span>Profile</span>
            </NavLink>
          )}
          <Link to="/cart" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            background: 'white',
            color: '#0099f7',
            padding: '0.5rem 1rem',
            borderRadius: '2rem',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}>
            <ShoppingCart size={18} />
            <span>Cart</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ to, children, ...props }) => (
  <Link
    to={to}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      color: 'white',
      textDecoration: 'none',
      padding: '0.5rem',
      borderRadius: '0.25rem',
      transition: 'background-color 0.3s ease',
    }}
    {...props}
  >
    {children}
  </Link>
);

const DropdownLink = ({ to, children }) => (
  <Link
    to={to}
    style={{
      display: 'block',
      padding: '0.5rem 1rem',
      color: '#333',
      textDecoration: 'none',
      transition: 'background-color 0.3s ease',
    }}
  >
    {children}
  </Link>
);

export default Header;
