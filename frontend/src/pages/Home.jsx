import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap, Cpu, Wifi, Battery } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-container">
      {/* Top Bar */}
      <div className="top-bar">
        <span>ElectroNova: Get 15% off on all smart home devices! Limited time offer.</span>
        <a href="#" className="cta-link">
          Shop now
        </a>
      </div>

      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <div className="logo">
            <Link to="/">ElectroNova</Link>
          </div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/support">Support</Link>
            <Link to="/about">About Us</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`hero ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="hero-content">
            <h1>
              Power Your World with <span className="highlight">ElectroNova</span>
            </h1>
            <p>
              Discover cutting-edge electronics and smart home solutions that transform your living space into a hub of innovation and convenience.
            </p>
            <div className="cta-buttons">
              <button className="primary-btn">
                Explore Products <ChevronRight size={20} />
              </button>
              <button className="secondary-btn">
                Our Solutions
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ZL6AYcYST8pjSL4GSIuZkC24RrbqqcHClw&s"
              alt="ElectroNova Smart Home Devices"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose ElectroNova?</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <Zap size={48} />
              <h3>Energy Efficient</h3>
              <p>Our devices are designed to minimize power consumption without compromising performance.</p>
            </div>
            <div className="feature-item">
              <Cpu size={48} />
              <h3>Smart Technology</h3>
              <p>Integrated AI and machine learning capabilities for a truly intelligent home experience.</p>
            </div>
            <div className="feature-item">
              <Wifi size={48} />
              <h3>Seamless Connectivity</h3>
              <p>All our devices work in perfect harmony, creating a unified smart home ecosystem.</p>
            </div>
            <div className="feature-item">
              <Battery size={48} />
              <h3>Long-lasting</h3>
              <p>Built with durability in mind, our products are made to stand the test of time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="product-grid">
            <div className="product-item">
              <img src="/placeholder.svg?height=200&width=200" alt="Smart Thermostat" />
              <h3>Smart Thermostat</h3>
              <p>Efficient climate control at your fingertips</p>
              <button className="product-btn">Learn More</button>
            </div>
            <div className="product-item">
              <img src="/placeholder.svg?height=200&width=200" alt="AI Security Camera" />
              <h3>AI Security Camera</h3>
              <p>Advanced protection with facial recognition</p>
              <button className="product-btn">Learn More</button>
            </div>
            <div className="product-item">
              <img src="/placeholder.svg?height=200&width=200" alt="Smart Lighting System" />
              <h3>Smart Lighting System</h3>
              <p>Customizable ambiance for every mood</p>
              <button className="product-btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial">
        <div className="container">
          <blockquote>
            "ElectroNova has completely transformed our home. The integration between devices is seamless, and the energy savings are remarkable. It's not just a smart home; it's an intelligent living experience!"
          </blockquote>
          <cite>- Alex Chen, Smart Home Enthusiast</cite>
        </div>
      </section>

      <style jsx>{`
        :root {
          --primary-color: #ff9f43;
          --secondary-color: #ff6b6b;
          --accent-color: #54a0ff;
          --background-color: #f9f9f9;
          --text-color: #2f3542;
          --light-text-color: #747d8c;
        }
        .home-container {
          font-family: 'Roboto', sans-serif;
          color: var(--text-color);
        }
        .top-bar {
          background-color: var(--primary-color);
          color: #fff;
          font-size: 0.9rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
        }
        .cta-link {
          color: #fff;
          font-weight: 600;
          text-decoration: underline;
        }
        .navbar {
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .navbar .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
        }
        .logo a {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .logo a:hover {
          color: var(--secondary-color);
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        .nav-links a {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-color);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .nav-links a:hover {
          color: var(--primary-color);
        }
        .cart-btn {
          background-color: var(--accent-color);
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .cart-btn:hover {
          background-color: var(--secondary-color);
        }
        .hero {
          background-color: var(--background-color);
          padding: 6rem 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .hero.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hero .container {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .hero-content {
          flex: 1;
        }
        .hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--text-color);
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }
        .highlight {
          position: relative;
          display: inline-block;
          color: var(--primary-color);
        }
        .highlight::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 8px;
          background-color: var(--primary-color);
          opacity: 0.3;
        }
        .hero p {
          font-size: 1.25rem;
          color: var(--light-text-color);
          margin-bottom: 2rem;
        }
        .cta-buttons {
          display: flex;
          gap: 1rem;
        }
        .primary-btn, .secondary-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }
        .primary-btn {
          background-color: var(--primary-color);
          color: #fff;
        }
        .primary-btn:hover {
          background-color: var(--secondary-color);
        }
        .secondary-btn {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        .secondary-btn:hover {
          background-color: var(--primary-color);
          color: #fff;
        }
        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        .hero-image img {
          max-width: 900px;
          height: 400px;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .features {
          background-color: #fff;
          padding: 6rem 0;
        }
        .features h2, .featured-products h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-color);
          text-align: center;
          margin-bottom: 3rem;
        }
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .feature-item {
          background-color: var(--background-color);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 15px rgba(0,0,0,0.1);
        }
        .feature-item svg {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }
        .feature-item h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 0.5rem;
        }
        .feature-item p {
          color: var(--light-text-color);
        }
        .featured-products {
          background-color: var(--background-color);
          padding: 6rem 0;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .product-item {
          background-color: #fff;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .product-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 15px rgba(0,0,0,0.1);
        }
        .product-item img {
          width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
        }
        .product-item h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 0.5rem;
        }
        .product-item p {
          color: var(--light-text-color);
          margin-bottom: 1rem;
        }
        .product-btn {
          background-color: var(--accent-color);
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .product-btn:hover {
          background-color: var(--secondary-color);
        }
        .testimonial {
          background-color: var(--primary-color);
          color: #fff;
          padding: 6rem 0;
          text-align: center;
        }
        .testimonial blockquote {
          font-size: 1.5rem;
          font-style: italic;
          max-width: 800px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }
        .testimonial cite {
          font-size: 1.125rem;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .hero .container {
            flex-direction: column;
          }
          .hero-content, .hero-image {
            width: 100%;
          }
          .nav-links {
            display: none;
          }
          .hero h1 {
            font-size: 2.5rem;
          }
          .feature-grid, .product-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;

