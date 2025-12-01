import React from 'react';
import './Home-Page.css';

// Import images - save these in root/src/components/images/
import logo from './images/logo.png';
import heroCharacter from './images/hero-character.png';
import cardImage from './images/card-image.png';
import userAvatar1 from './images/user-avatar-1.png';
import userAvatar2 from './images/user-avatar-2.png';
import userAvatar3 from './images/user-avatar-3.png';
import userAvatar4 from './images/user-avatar-4.png';
import productCard1 from './images/product-card-1.png';
import productCard2 from './images/product-card-2.png';
import productCard3 from './images/product-card-3.png';
import productCard4 from './images/product-card-4.png';
import aboutImage from './images/about-image.png';
import offerImage from './images/offer-image.png';
import chatbotIcon from './images/chatbot-icon.png';
import globeImage from './images/globe-image.png';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Navigation */}
      <nav className="home-page-nav">
        <div className="home-page-nav-container">
          <div className="home-page-logo">
            <img src={logo} alt="Portfolio Hub Logo" className="home-page-logo-img" />
            <span className="home-page-logo-text">Portfolio Hub</span>
          </div>
          
          <ul className="home-page-nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Categories">Categories</a></li>
            <li><a href="https://cdn.dribbble.com/userupload/12778193/file/original-4375c44c39710b7b9e66b24647a34b9b.png?format=webp&resize=640x480&vertical=center">Blog</a></li>
          </ul>
          
          <div className="home-page-nav-buttons">
            <a href="/Auth"><button className="home-page-btn-secondary">Log In</button></a>
            <a href="/Auth"><button className="home-page-btn-primary">Sign Up</button></a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="home-page-hero">
        <div className="home-page-hero-container">
          <div className="home-page-hero-left">
            <div className="home-page-card">
              <img src={cardImage} alt="Smart Solutions" className="home-page-card-img" />
              <div className="home-page-card-content">
                <h3>Smart Solutions for tricky problems</h3>
                <p>This is the time for you to solve your complex problems using our solution</p>
                <a href="/Categories" className="home-page-card-link">⚡ Read</a>
              </div>
            </div>
          </div>
          
          <div className="home-page-hero-center">
            <h1 className="home-page-hero-title">
              Your <br />
              <span className="home-page-hero-highlight">Choice</span>
            </h1>
            <img src={heroCharacter} alt="3D Character" className="home-page-hero-character" />
            <a href="/Categories"><button className="home-page-hero-btn">Enter Your Designs</button></a>
          </div>
          
          <div className="home-page-hero-right">
            <div className="home-page-placeholder-card">
              <img src={chatbotIcon} alt="bot" />
              <a href="/FolioMate"><button>BOT IS HERE</button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="home-page-stats">
        <div className="home-page-stats-container">
          <div className="home-page-stat-item">
            <h3>Join Us ~</h3>
            <div className="home-page-user-avatars">
              <img src={userAvatar1} alt="User" className="home-page-avatar" />
              <img src={userAvatar2} alt="User" className="home-page-avatar" />
              <img src={userAvatar3} alt="User" className="home-page-avatar" />
              <img src={userAvatar4} alt="User" className="home-page-avatar" />
            </div>
            <p className="home-page-stat-number">1,00,000 + Users</p>
          </div>
          
          <div className="home-page-stat-badge">
            <div className="home-page-badge-content">
              <span className="home-page-badge-top">TOP DESIGNS</span>
              <span className="home-page-badge-bottom">YOUR CHOICE</span>
            </div>
          </div>
          
          <div className="home-page-stat-item">
            <p className="home-page-stat-number">1000 +</p>
            <p className="home-page-stat-label">Templates<br />Reviews are Great</p>
          </div>
        </div>
      </section>

      {/* Coding Section */}
      <section className="home-page-coding">
        <div className="home-page-coding-container">
          <div className="home-page-coding-content">
            <h2 className="home-page-coding-title">Tired of Coding ?</h2>
            <p className="home-page-coding-subtitle">No Problem, Here what you can do.</p>
            <div className="home-page-coding-buttons">
              <a href="/Categories"><button className="home-page-btn-secondary">Select Domain</button></a>
              <a href="/Categories"><button className="home-page-btn-secondary">See More</button></a>
            </div>
          </div>
          <div className="home-page-coding-image">
            <div className="home-page-stacked-cards">
              <div className="home-page-stack-card">
                <img src={offerImage} alt="offer" />
              </div>
              <div className="home-page-stack-card">
                <img src={chatbotIcon} alt="offer" />
              </div>
              <div className="home-page-stack-card">
                <img src={productCard2} alt="offer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="home-page-products">
        <h2 className="home-page-section-title">Our Products</h2>
        <div className="home-page-products-grid">
          <div className="home-page-product-card">
            <img src={productCard1} alt="Product 1" className="home-page-product-img" />
          </div>
          <div className="home-page-product-card">
            <img src={productCard2} alt="Product 2" className="home-page-product-img" />
          </div>
          <div className="home-page-product-card">
            <img src={productCard3} alt="Product 3" className="home-page-product-img" />
          </div>
          <div className="home-page-product-card">
            <img src={productCard4} alt="Product 4" className="home-page-product-img" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="home-page-about">
        <div className="home-page-about-container">
          <div className="home-page-about-content">
            <h2 className="home-page-section-title">About Us</h2>
            <p className="home-page-about-text">
              Portfolio Builder Hub is designed to make portfolio creation easier, faster, and smarter for students, developers, designers, and professionals. We bring templates from multiple formats—Figma files, coded templates, and no-code layouts—into a single platform.
            </p>
            <p className="home-page-about-text">
              No more wasting hours learning different tools to build their ideal portfolio.
            </p>
            <p className="home-page-about-text">
              Our goal is to bridge the gap between "I want a portfolio" and "I know how to make one."
            </p>
          </div>
          <div className="home-page-about-image">
            <img src={aboutImage} alt="About Us" className="home-page-about-img" />
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="home-page-offer">
        <div className="home-page-offer-container">
          <div className="home-page-offer-image">
            <img src={offerImage} alt="What we offer" className="home-page-offer-img" />
          </div>
          <div className="home-page-offer-content">
            <h2 className="home-page-section-title">What we offer ?</h2>
            <p className="home-page-offer-text">
              Portfolio Builder Hub makes portfolio creation easier, faster, and smarter for students, developers, designers, and professionals. We bring multiple formats—Figma designs, coded templates, and no-code layouts—into one platform where users can explore, compare, and build their ideal portfolio.
            </p>
            <p className="home-page-offer-text">
              We bridge the gap between "I want a portfolio" and "I know how to make one."
            </p>
          </div>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="home-page-chatbot">
        <h2 className="home-page-section-title">Personal Recommendation Chatbot</h2>
        <div className="home-page-chatbot-icon">
          <img src={chatbotIcon} alt="Chatbot" className="home-page-chatbot-img" />
        </div>
        <a href="/FolioMate"><button id='folio-home-btn'>Ask Me your Doubts</button></a>
      </section>

      {/* CTA Section */}
      <section className="home-page-cta">
        <div className="home-page-cta-container">
          <img src={globeImage} alt="Globe" className="home-page-cta-globe" />
          <h2 className="home-page-cta-title">Get Ready made Designs</h2>
          <a href="/Categories"><button className="home-page-cta-btn">Select Categories</button></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-page-footer">
        <div className="home-page-footer-container">
          <div className="home-page-footer-content">
            <h3>Footer</h3>
          </div>
          <div className="home-page-footer-social">
            <h4>Follow Us On</h4>
            <div className="home-page-social-icons">
              <a href="https://www.facebook.com" className="home-page-social-icon">f</a>
              <a href="https://www.twitter.com" className="home-page-social-icon">t</a>
              <a href="https://www.google.com" className="home-page-social-icon">i</a>
              <a href="#" className="home-page-social-icon">in</a>
            </div>
          </div>
          <a href="/Auth"><button className="home-page-footer-btn">Go</button></a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;