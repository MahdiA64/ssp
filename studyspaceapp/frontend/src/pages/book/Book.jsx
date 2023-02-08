import React from 'react'
import CreateBooking from '../../components/book/BookSpace'
import Chatbot from '../chatbot/Chatbot'
// import TokenProvider from "../../components/token/Token"

const Book = () => {
  return (
    <div>
      {/* <TokenProvider> */}
      <CreateBooking />
      <Chatbot />
      {/* </TokenProvider> */}
    </div>
  )
}

export default Book

    
