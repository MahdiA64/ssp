import axios from 'axios'
import './ReviewHeader.css'
import React, { useState, useEffect } from 'react';

const ReviewHeader = () => {
    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
    axios.get('http://localhost:8000/api/reviews/')
    .then(res => setReviews(res.data))
    .catch(err => console.log(err))
    }, [])
    
  return (
    <div className='reviewNavbar'>
        <div className='reviewNavContainer'>
            <span className='reviewLogo'>LibraryPal
                <div className='getReviews'>
                    <button className='reviewButton' class='btn btn-light' onClick={() => console.log(reviews)}>View Reviews</button>
                    <div className='reviewDesc'>
                    <span>We really appreciate your feedback! Please leave a review so we know where we can improve and we'll use your feedback to suggest the most popular study spaces!</span>
                    </div>
                    {reviews.length > 0 && reviews.map(review => (
                        <div key={review._id} className='review'>
                        {review.text}
                </div>
            ))}
                </div>
            </span>
        </div>
    </div>
  )
}

export default ReviewHeader
