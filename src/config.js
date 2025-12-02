// src/config.js
const ENV = process.env.REACT_APP_NODE_ENV || 'development';

const ROUTES = {
  landing: '/',
  home: '/home',
  testimonials: '/testimonials',
  contact: '/contact',
  about: '/about',
  folioMate: '/folio-mate',
  feedbackForm: '/feedback',
  auth: '/auth'
};

const CONFIG = {
  env: ENV,
  apiBase:
    ENV === 'production'
      ? process.env.REACT_APP_API_BASE || 'https://api.yoursite.com'
      : process.env.REACT_APP_API_BASE || 'http://localhost:4000',
  routes: ROUTES,
  analyticsId: process.env.REACT_APP_GA || '',
  featureFlags: {
    enableNewUI: process.env.REACT_APP_ENABLE_NEW_UI === 'true'
  }
};

export default CONFIG;
export { ROUTES };
