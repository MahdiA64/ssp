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

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useJwt from '../../jwt/useJwt';

function Home() {
  const location = useLocation();
  const jwt = useJwt();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (!token) {
      return;
    }
    jwt.setToken(token);
    window.history.replaceState({}, document.title, '/');
  }, [location]);

  const handleLogout = () => {
    // Add logic for logging out the user
    jwt.logout();    
  };


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