import React, { useState } from 'react';
import { createBook, updateBook } from '../../api/book';

const BookingForm = ({ booking }) => {
  const [studySpace, setStudySpace] = useState(booking?.study_space.name);
  const [startTime, setStartTime] = useState(booking?.start_time);
  const [endTime, setEndTime] = useState(booking?.end_time);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a POST request to the Django backend to update the booking
    if (booking){
      updateBook(booking.id, {
        study_space: studySpace,
        start_time: startTime,
        end_time: endTime,
      });
    } else {
      createBook({
        study_space: studySpace,
        start_time: startTime,
        end_time: endTime,
      });
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="study-space">Study Space:</label>
      <input
        type="text"
        id="study-space"
        value={studySpace}
        onChange={(event) => setStudySpace(event.target.value)}
      />
      <br />
      <label htmlFor="start-time">Start Time:</label>
      <input
        type="datetime-local"
        id="start-time"
        value={startTime}
        onChange={(event) => setStartTime(event.target.value)}
      />
      <br />
      <label htmlFor="end-time">End Time:</label>
      <input
        type="datetime-local"
        id="end-time"
        value={endTime}
        onChange={(event) => setEndTime(event.target.value)}
      />
      <br />
      <button type="submit">{booking ? 'Update' : 'Create'} Booking</button>
      <button type="button" onClick={handleCancel}>
        Cancel Booking
      </button>
    </form>
  );
};

export default BookingForm;