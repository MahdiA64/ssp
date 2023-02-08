import React from 'react'
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import Footer from '../../components/footer/Footer';
import './home.css'
import Chatbot from '../chatbot/Chatbot';

const Home = () => {
  return (
    <div>
        <Navbar />
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
