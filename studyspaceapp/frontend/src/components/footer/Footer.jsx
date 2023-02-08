import './footer.css'

import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="fLists">
        <ul className="fList"> 
            <li className="fListItem">Monday</li>
            <li className="fListItem">Tuesday</li>
            <li className="fListItem">Wednesday</li>
            <li className="fListItem">Thursday</li>
            <li className="fListItem">Friday</li>
            <li className="fListItem">Saturday</li>
            <li className="fListItem">Sunday</li>
        </ul>
        <ul className="fList">
            <li className="fListItem">24/7</li>
            <li className="fListItem">24/7</li>
            <li className="fListItem">24/7</li>
            <li className="fListItem">24/7</li>
            <li className="fListItem">24/7</li>
            <li className="fListItem">24/7</li>
            <li className="fListItem">24/7</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;
