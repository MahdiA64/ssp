import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import './navbar.css'

const Navbar = () => {
  const handleLogout = () => {
    const csrftoken = Cookies.get('csrftoken')
    axios.post('http://localhost:8000/logout/', {}, {
      headers: {
        'X-CSRFToken': csrftoken
      }
    })
    .then(() => {
      window.location.href = 'http://localhost:8000/'
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">Study Space Booking</span>
            <div className="navItems">
            <button className="navButton" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </div>
  );
}

export default Navbar;