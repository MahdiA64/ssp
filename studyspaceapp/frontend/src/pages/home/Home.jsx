// import React from 'react'
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import Footer from '../../components/footer/Footer';
import './home.css'
import Chatbot from '../chatbot/Chatbot';

// const Home = () => {  
//   return (
//     <div>
//         <Navbar />
//         <Header />
//         <div className='homeContainer'>
//           <Featured />
//           <Footer />
//           <Chatbot />
//         </div>
//     </div>
//   );
// }

// export default Home;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [token, setToken] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    setToken(token);
  }, [location]);

  const handleLogout = () => {
    // Add logic for logging out the user
  };

  if (token) {
    // Store the token in the localStorage
    localStorage.setItem('token', token);

    // Remove the token from the URL
    window.history.replaceState({}, document.title, '/');
  }

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <Header />
      <div className='homeContainer'>
        <Featured />
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
}

export default Home;