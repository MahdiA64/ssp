import './header.css'
import React from 'react'
import { faHome, faSchool, faBook, faBookmark, faUserCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBook} />
            <span><Link to = "/Book">Reserve</Link></span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBookmark} />
            <span><Link to = "/Bookings">Bookings</Link></span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faUserCheck} />
            <span><Link to = "/review">Review</Link></span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faSchool} />
            <span>Study Spaces</span>
            </div>
        </div>
        <h1 className="headerTitle">Welcome to LibraryPal</h1>
        <p className="headerDesc">An easy way to book a study space within the campus Library!</p>
        </div>
    </div>
  )
}

export default Header;
