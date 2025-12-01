import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// --- CSS CONTENT (Auth.css Equivalent) ---
const authStyles = `
/* Color Palette: Clean Black/White/Gray */
:root {
    --auth-primary: #000;
    --auth-secondary: #333;
    --auth-accent: #000;
    --auth-light-gray: #f5f5f5;
    --auth-text-color: #333;
    --auth-error-color: #dc3545;
    --auth-transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smooth animation curve */
}

/* 1. Full Viewport Setup (No Scroll) */
html, body, #auth-root {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden; /* Prevent scrolling on desktop */
    font-family: 'Inter', sans-serif;
    background-color: var(--auth-light-gray);
}

.auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
}

/* 2. Main Card Wrapper */
.auth-form-wrapper {
    display: flex;
    width: 90%;
    max-width: 900px; 
    height: 90%; /* Use percentage of viewport height */
    max-height: 600px; /* Cap size on huge monitors */
    background-color: white;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-radius: 1.5rem;
    overflow: hidden;
    transition: var(--auth-transition);
}

/* 3. Form Container (Left Panel) */
.auth-form-container {
    flex: 1; /* Takes 50% width normally */
    padding: 2.5rem 2rem; /* Increased vertical padding to ensure social buttons fit */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: var(--auth-transition);
    order: 1; /* Default order: Left (Sign Up view) */
    /* Ensure content scrolls if form is too long on small screens */
    overflow-y: auto; 
}

.auth-title {
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--auth-primary);
    margin-bottom: 0.5rem;
}

.auth-subtitle {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1.5rem; /* Reduced margin slightly to save space */
}

/* 4. Form Styling */
.auth-form {
    width: 100%;
    max-width: 350px;
}

.auth-input-group {
    text-align: left;
    margin-bottom: 0.9rem; /* Reduced margin slightly to save space */
}

.auth-label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
    color: var(--auth-text-color);
}

.auth-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    font-size: 1rem;
    box-sizing: border-box;
    transition: border-color 0.3s, box-shadow 0.3s;
}

.auth-input:focus {
    outline: none;
    border-color: var(--auth-accent);
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
}

/* 5. Toggle Switch (Sign Up / Login buttons - Controls the smooth slide) */
.auth-toggle-switch {
    display: flex;
    background-color: var(--auth-light-gray);
    border-radius: 0.75rem;
    padding: 0.3rem;
    margin-bottom: 1rem;
    margin-top: 1.6rem;
}

.auth-toggle-btn {
    flex: 1;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    background-color: transparent;
    color: var(--auth-text-color);
    transition: var(--auth-transition);
}

.auth-toggle-btn.auth-active {
    background-color: white;
    color: var(--auth-primary);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* 6. Submit Button */
.auth-submit-btn {
    width: 100%;
    padding: 0.8rem;
    background-color: var(--auth-accent);
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 1.25rem; /* Increased margin to separate from inputs */
    transition: background-color 0.3s, transform 0.2s;
}

.auth-submit-btn:hover {
    background-color: var(--auth-secondary);
    transform: translateY(-1px);
}

/* 7. Remember/Forgot Links */
.auth-remember-forgot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 0.85rem;
}

.auth-checkbox-label {
    display: flex;
    align-items: center;
    color: #666;
    cursor: pointer;
}

.auth-checkbox {
    margin-right: 0.5rem;
}

.auth-forgot-link {
    color: var(--auth-accent);
    text-decoration: none;
    font-weight: 500;
}
.auth-forgot-link:hover {
    text-decoration: underline;
}

/* 8. Divider */
.auth-divider {
    position: relative;
    text-align: center;
    margin: 1.25rem 0; /* Reduced margin slightly to save space */
}
.auth-divider::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    border-top: 1px solid #ddd;
    z-index: 1;
}
.auth-divider-text {
    background-color: white;
    padding: 0 1rem;
    position: relative;
    z-index: 2;
    font-size: 0.85rem;
    color: #666;
}

/* 9. Social Buttons (Visibility Fix applied via container height management) */
.auth-social-buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

.auth-social-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;
    background-color: white;
    color: var(--auth-text-color);
}

.auth-social-btn:hover {
    background-color: var(--auth-light-gray);
}

.auth-social-icon {
    font-size: 1.1rem;
    margin-right: 0.5rem;
}

/* 10. Switch Link */
.auth-switch-text {
    font-size: 0.9rem;
    color: #666;
}
.auth-switch-link {
    background: none;
    border: none;
    color: var(--auth-accent);
    font-weight: 600;
    cursor: pointer;
    padding: 0;
    margin-left: 0.25rem;
}

/* 11. Image/Promo Section (Right Panel) */
.auth-image-section {
    flex: 1; 
    background: var(--auth-accent);
    background-image: linear-gradient(135deg, #000000 0%, #333333 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    padding: 2rem;
    order: 2; /* Default order: Right */
    transition: var(--auth-transition);
}

/* --- ANIMATION / MODE SWITCHING --- */

/* When in Login Mode, swap the order of the panels using flexbox 'order' property for smooth slide */
.auth-login-mode .auth-form-container {
    order: 2; /* Move form to the right side */
}

.auth-login-mode .auth-image-section {
    order: 1; /* Move promo section to the left side */
}


/* --- Responsive Adjustments --- */
@media (max-width: 900px) {
    .auth-form-wrapper {
        flex-direction: column;
        height: auto;
        max-height: 95vh;
        width: 95%;
    }
    .auth-image-section {
        display: none; /* Hide the promotional image section on mobile for better focus */
    }
    .auth-form-container {
        padding: 1.5rem;
        flex: none;
    }
    .auth-title {
        font-size: 1.5rem;
    }
    .auth-form-wrapper {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    }
    html, body, #auth-root {
        overflow-y: auto; /* Allow vertical scroll if content overflows on small screen */
    }
    .auth-container {
        height: auto;
        min-height: 100vh;
        padding: 1rem 0;
    }
}
`;
// --- END OF CSS CONTENT ---

const Auth = () => {

  const navigate = useNavigate(); // ⭐ ADDED

  useEffect(() => {
    const root = document.getElementById('auth-root');
    if (root) {
        // Ensure the root element exists
    }
  }, []);

  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      setMessage(`Attempting to log in with ${formData.email}...`);

      // ⭐ ADDED: redirect after 1 sec
      setTimeout(() => {
        setMessage('');
        navigate("/Home");  // ⭐ REDIRECT
      }, 800);

    } else {

      if (formData.password !== formData.confirmPassword) {
        setMessage('Error: Passwords do not match!');
        return;
      }

      setMessage(`Signing up user ${formData.name}. Welcome!`);

      // ⭐ ADDED: redirect after 1 sec
      setTimeout(() => {
        setMessage('');
        navigate("/Home");  // ⭐ REDIRECT
      }, 800);
    }
  };

  // ✅ ADDED: this was missing and causing the error
  const handleToggle = () => {
    setIsLogin((prev) => !prev);
    setMessage('');
  };

  return (
    <div id="auth-root">
      {/* Inject the CSS styles directly */}
      <style>{authStyles}</style>
      
      <div className={`auth-container ${isLogin ? 'auth-login-mode' : ''}`}>
        <div className="auth-form-wrapper">
          
          {/* Form Side */}
          <div className="auth-form-container">
            
            {/* Toggle Switch: THESE BUTTONS CONTROL THE SMOOTH SLIDE */}
            <div className="auth-toggle-switch">
             <a href="/Home"> <button 
                className={`auth-toggle-btn ${!isLogin ? 'auth-active' : ''}`}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button></a>
              <a href="/Home"><button 
                className={`auth-toggle-btn ${isLogin ? 'auth-active' : ''}`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button></a>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
              <h2 className="auth-title">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
              <p className="auth-subtitle">
                {isLogin ? 'Login to your account' : 'Sign up to get started'}
              </p>
              
              {/* Status Message / Error Message Box */}
              {message && (
                <div style={{ 
                  padding: '0.75rem', 
                  marginBottom: '1rem', 
                  borderRadius: '0.5rem', 
                  backgroundColor: message.startsWith('Error') ? '#f8d7da' : '#d1e7dd', 
                  color: message.startsWith('Error') ? '#dc3545' : '#0f5132', 
                  border: '1px solid', 
                  borderColor: message.startsWith('Error') ? '#f5c2c7' : '#badbcc', 
                  fontSize: '0.9rem' 
                }}>
                  {message}
                </div>
              )}

              {!isLogin && (
                <div className="auth-input-group">
                  <label htmlFor="auth-name" className="auth-label">Full Name</label>
                  <input
                    type="text"
                    id="auth-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="auth-input"
                    placeholder="Enter your full name"
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="auth-input-group">
                <label htmlFor="auth-email" className="auth-label">Email Address</label>
                <input
                  type="email"
                  id="auth-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="auth-input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="auth-input-group">
                <label htmlFor="auth-password" className="auth-label">Password</label>
                <input
                  type="password"
                  id="auth-password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="auth-input"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {!isLogin && (
                <div className="auth-input-group">
                  <label htmlFor="auth-confirm-password" className="auth-label">Confirm Password</label>
                  <input
                    type="password"
                    id="auth-confirm-password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="auth-input"
                    placeholder="Confirm your password"
                    required={!isLogin}
                  />
                </div>
              )}

              {isLogin && (
                <div className="auth-remember-forgot">
                  <label className="auth-checkbox-label">
                    <input type="checkbox" className="auth-checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a href="#forgot" onClick={(e) => { e.preventDefault(); setMessage('Password reset link sent to your email (simulated).'); setTimeout(() => setMessage(''), 3000); }} className="auth-forgot-link">Forgot Password?</a>
                </div>
              )}

              <button type="submit" className="auth-submit-btn">
                {isLogin ? 'Login' : 'Create Account'}
              </button>

              <div className="auth-divider">
                <span className="auth-divider-text">Or continue with</span>
              </div>

              {/* Social Buttons: Now correctly visible due to spacing adjustments */}
              <div className="auth-social-buttons">
                <button type="button" className="auth-social-btn auth-google">
                  <span className="auth-social-icon">G</span>
                  Google
                </button>
                <button type="button" className="auth-social-btn auth-github">
                  <span className="auth-social-icon">Git</span>
                  GitHub
                </button>
              </div>

              <p className="auth-switch-text">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button type="button" onClick={handleToggle} className="auth-switch-link">
                  {isLogin ? ' Sign Up' : ' Login'}
                </button>
              </p>
            </form>
          </div>

          {/* Image/Promo Side (Swaps position with animation) */}
          <div className="auth-image-section">
            <div className="auth-image-overlay">
              <h3 className="auth-image-title">
                {isLogin ? 'Welcome Back!' : 'Join Our Community'}
              </h3>
              <p className="auth-image-text">
                {isLogin 
                  ? 'Access your personalized dashboard and continue your journey with us.'
                  : 'Discover amazing features and connect with like-minded people.'}
              </p>
              <div className="auth-features">
                <div className="auth-feature">
                  <div className="auth-feature-icon">✓</div>
                  <span>Secure & Reliable</span>
                </div>
                <div className="auth-feature">
                  <div className="auth-feature-icon">✓</div>
                  <span>24/7 Support</span>
                </div>
                <div className="auth-feature">
                  <div className="auth-feature-icon">✓</div>
                  <span>Easy to Use</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
