import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Other.css';
// import './css/all.min.css';
// import './css/contact-form-7-main.min.css';
// import './css/frontend-lite.min.css';
import './css/main.min.css';
// import './css/post-205.css';
// import './css/post-207.css';
// import './css/styles.css';
// import './css/swiper.min.css';
// import './css/v4-shims.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
