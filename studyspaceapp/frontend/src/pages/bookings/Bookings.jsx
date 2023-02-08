import React, { useState } from 'react';
import Cookies from 'js-cookie';

const UpdateBookingForm = ({ booking }) => {
  const [studySpace, setStudySpace] = useState(booking.study_space.name);
  const [startTime, setStartTime] = useState(booking.start_time);
  const [endTime, setEndTime] = useState(booking.end_time);

  const handleSubmit = (event) => {
    event.preventDefault();
    const csrftoken = Cookies.get('csrftoken');
    // Send a POST request to the Django backend to update the booking
    fetch(`/bookings/${booking.id}/update/`, {
      method: 'POST',
      body: JSON.stringify({
        study_space: studySpace,
        start_time: startTime,
        end_time: endTime,
      }),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
    });
  };

  const handleCancel = (event) => {
    event.preventDefault();
    // Send a POST request to the Django backend to cancel the booking
    fetch(`/bookings/${booking.id}/update/`, {
      method: 'POST',
      body: JSON.stringify({
        cancel: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
      <button type="submit">Update Booking</button>
      <button type="button" onClick={handleCancel}>
        Cancel Booking
      </button>
    </form>
  );
};

export default UpdateBookingForm;