import React from 'react'
import ReviewForm from '../../components/review/ReviewForm'
import ReviewHeader from '../../components/reviewHeader/ReviewHeader'
import Chatbot from '../chatbot/Chatbot';


const Review = () => {
  return (
    <div>
      <ReviewHeader />
      <ReviewForm />
      <Chatbot />
    </div>
  )
}

export default Review
